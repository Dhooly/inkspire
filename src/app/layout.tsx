import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '../lib/utils'
import { ThemeProvider } from '../components/theme-provider'
import NavBar from '../components/NavBar'
import StoreProvider from './StoreProvider'
import NextAuthProvider from './NextAuthProvider'
import './globals.css'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased px-6 2xl:mx-[calc((100vw-1536px)/1.5)]', fontSans.variable)}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
              <NextAuthProvider>
                <NavBar />
              </NextAuthProvider>
              {children}
            </StoreProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}
