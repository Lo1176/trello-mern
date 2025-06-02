'use client';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { NavItem, Organization } from './nav-item';
interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = 'f-sidebar-state' }: SidebarProps) => {
  const [expended, setExpended] = useLocalStorage<Record<string, unknown>>(
    storageKey,
    {}
  );
  const { organization: activeOrg, isLoaded: isLoadedOrg } = useOrganization();
  // more information on https://clerk.com/docs/hooks/use-organization-list
  const { userMemberships, isLoaded: isLoadedOrganizationList } =
    useOrganizationList({ userMemberships: { infinite: true } });

  const defaultAccordionValue: string[] = Object.keys(expended).reduce(
    (acc: string[], key: string) => {
      if (expended[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpended((curr) => ({
      ...curr,
      [id]: !expended[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrganizationList || userMemberships.isLoading) {
    return (
      <>
        <div className='flex items-center justify-between mb-2'>
          <Skeleton className='h-10 w-[50%]' />
          <Skeleton className='h-10 w-10' />
        </div>
        <div className='space-y-2'>
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='font-medium text-xs flex items-center mb-1'>
        <span className='pl-4'>Workspaces</span>
        <Button asChild variant='ghost' className='ml-auto' size='icon'>
          <Link href='/select-org'>
            <Plus className='h-4 w-4' />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={defaultAccordionValue}
        className='space-y-2'
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={!!expended[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};
