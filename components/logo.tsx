import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

// not sure of this font
const logoFont = localFont({ src: '../../public/fonts/Charlie-Regular.woff2' });

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center gap-2 p-2'>
        <Image
          src='/logo.png'
          alt='FlowBoard Logo'
          width={30}
          height={30}
          className='h-10 w-10 rounded-full'
        />
        <p className={cn('text-lg text-neutral-700', logoFont.className)}>
          FlowBoard
        </p>
      </div>
    </Link>
  );
};
