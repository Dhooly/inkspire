'use client'

import { useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { selectProviders, fetchProviders } from '../redux/features/nav/navSlice'
import { ModeToggle } from '../components/ui/ModeToggle'
import Image from 'next/image'
import NavDrawer from '../components/NavDrawer'
import Link from 'next/link'
import type { ReactElement } from 'react'

export default function NavBar (): ReactElement {
  const { data: session } = useSession()
  const providers = useAppSelector(selectProviders)
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchProviders())
  }, [])

  return (
    <nav className='flex items-center justify-between py-6'>
      <NavDrawer />
      <h1 className='text-4xl font-bold'>
        <Link href='/'>Inkspire</Link>
      </h1>
      <div className='flex items-center justify-center'>
        <div className='hidden md:block lg:block xl:block 2xl: block'>
          <Link href='/' className=' p-3 text-xl'>Home</Link>
          <Link href='/about' className=' p-3 text-xl'>About</Link>
          <Link href='/contact' className=' p-3 text-xl'>Contact</Link>
          {session?.user !== undefined
            ? (
              <>
                <Link href='/create' className='p-3 text-xl'>Create</Link>
                <button onClick={() => signOut()} className='p-3 text-xl'>Logout</button>
                <Link href='/profile' className='p-3'>
                  <Image className='rounded-[50%]' src={session.user.image as string} width={40} height={40} alt='profile-picture' />
                </Link>
              </>
              )
            : (
              <>
                {providers !== null
                  ? Object.values(providers).map((provider) => (
                    <button className='p-3 text-xl' key={(provider as any).name} onClick={() => signIn()}>
                      Login
                    </button>
                  )) : <button className='p-3 text-xl text-zinc-800' disabled>Login</button>}
              </>
              )}
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}
