import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className='fixed top-0 w-full h-14 flex items-center p-4 bg-white shadow-sm'>
      {/* md:max-w-7xl is used to limit the maximum width of the navbar on larger screens */}
      <div className='md:max-w-7xl mx-auto flex w-full items-center justify-between'>
        <Logo />
        <div className='flex items-center space-x-4 md:block md:w-auto justify-between w-full'>
          <Button size='sm' variant='outline' asChild>
            <Link href='/auth/sign-in'>Sign In</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/auth/sign-up'>Get your free account</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
