'use client';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
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

  const onExtand = (id: string) => {
    setExpended((curr) => ({
      ...curr,
      [id]: !expended[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrganizationList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
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
          <p key={organization.id}>{organization.id}</p>
        ))}
      </Accordion>
    </>
  );
};
