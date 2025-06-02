'use-client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export type Organization = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

interface NavItemProps {
  //   key: string;
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const routes = [
    {
      label: 'Boards',
      icon: <Layout className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className='border-none'>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-green-500/10 text-green-700'
        )}
      >
        <div className='flex items-center gap-x-2'>
          <div className='relative'>
            {/* https://nextjs.org/docs/messages/next-image-unconfigured-host */}
            <Image
              src={organization.imageUrl}
              width={28}
              height={28}
              alt={organization.name}
              className='rounded-sm object-cover'
              // style={{
              //   maxWidth: '100%',
              //   height: 'auto',
              // }}
            />
          </div>
          <span className='font-medium text-sm'>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='pl-4 pt-1 text-neutral-700'>
        {routes.map((route) => (
          <Button
            key={route.href}
            size='sm'
            variant='ghost'
            onClick={() => onClick(route.href)}
            className={cn(
              'w-full font-normal justify-start pl-10 mb-1',
              pathName === route.href && 'bg-green-500/10 text-green-700'
            )}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function NavItemSkeleton() {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='h-10 w-10 relative shrink-0'>
        <Skeleton className='h-full w-full absolute' />
      </div>
      <Skeleton className='h-10 w-full' />
    </div>
  );
};
