import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import {
  Drawer, DrawerHeader, DrawerDescription, DrawerFooter, DrawerTitle, DrawerContent, DrawerTrigger, DrawerClose
} from './ui/drawer'
import { Button } from '../components/ui/button'

export default function NavDrawer () {
  return (
      <div className='md:hidden'>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant='ghost'>
              <HamburgerMenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className='flex flex-col justify-center items-center py-10 text-5xl leading-[100px]'>
              {/* TODO LIST CATEGORIES */}
              <DrawerClose asChild>
                <Link href='/'>Home</Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href='/about'>About</Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href='/contact'>Contact</Link>
              </DrawerClose>
              {/* MAKE LOGIN BUTTON DYNAMIC, APPEAR ONLY WHEN NOT LOGGED IN*/}
              <DrawerClose asChild>
                <Link href='/login'>Login</Link>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
  )
}
