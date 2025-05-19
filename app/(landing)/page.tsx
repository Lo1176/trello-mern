import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Flower } from 'lucide-react';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';

const headingFont = localFont({
  src: '../../public/fonts/fonts.ttf',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <section
        className={cn(
          'flex items-center justify-center flex-col h-screen gap-2',
          headingFont.className
        )}
      >
        <div className='flex items-center border p-4 rounded-md mb-4 gap-1 bg-green-100 text-green-800 shadow-sm'>
          <Flower className='h-6 w-6' />
          Transform your Workflow
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-2'>
          Streamline your tasks, amplify
        </h1>
        <h1 className='text-3xl md:text-6xl bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 px-6 p-3 rounded-md text-white text-center mb-8'>
          your Productivity!
        </h1>
        <p
          className={cn(
            'text-sm md:text-lg text-center text-neutral-600 mb-4 max-w-xs md:max-w-2xl mx-auto',
            poppins.className
          )}
        >
          Organize, collaborate, and achieve more with FlowBoard, the ultimate
          task management tool designed to streamline your projects and boost
          productivity.
        </p>
        <Button size='lg' asChild>
          <Link href='/sign-up'>Get FlowTask</Link>
        </Button>
      </section>
    </div>
  );
}
