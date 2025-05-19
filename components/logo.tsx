import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

// not sure of this font
const logoFont = localFont({ src: '../public/fonts/fonts.ttf' });

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image
          src='/logo.png'
          alt='FlowBoard Logo'
          width={20}
          height={20}
          // 'interinsic' permet à l'image de conserver ses dimensions intrinsèques tout en permettant un redimensionnement via CSS.
          layout='intrinsic'
          className='h-10 w-auto rounded-full'
        />
        <p className={cn('text-lg text-neutral-700', logoFont.className)}>
          FlowBoard
        </p>
      </div>
    </Link>
  );
};
