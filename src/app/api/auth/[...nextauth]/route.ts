import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '../../../../lib/database'
import User from '../../../../models/user'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session ({ session }: any) {
      const sessionUser = await User.findOne({
        email: session.user.email
      })

      session.user.id = sessionUser._id.toString()

      return session
    },
    async signIn ({ profile }: any) {
      try {
        await connectToDB()

        // Check if a use already exists
        const userExists = await User.findOne({
          email: profile.email
        })

        // if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture
          })
        }

        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  },
  theme: {
    // Light mode on signin page
    colorScheme: 'light'
  }
})

export { handler as GET, handler as POST }
