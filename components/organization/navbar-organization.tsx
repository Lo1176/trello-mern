import { Plus } from 'lucide-react';

import { MobileSidebar } from '@/app/(platform)/(dashboard)/_components/mobile-sidebar';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export const NavbarOrganization = () => {
  return (
    <nav className='fixed top-0 w-full h-14 flex items-center px-4 bg-white shadow-sm'>
      <MobileSidebar />
      <div className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Logo />
        </div>
        {/* TODO; change primary color to I don't know! */}
        <Button
          size='sm'
          className='rounded-sm hidden md:block hover:bg-green-800 h-auto py-1.5 px-2'
        >
          Create
        </Button>
        <Button
          size='sm'
          className='rounded-sm md:hidden block hover:bg-green-800'
        >
          <Plus className='h-4 w-4' />
        </Button>
      </div>
      <div
        className='ml-auto flex items-center
      '
      >
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='select-org'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton />
      </div>
    </nav>
  );
};
