import { OrganizationProfile } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <div className='w-full'>
      <OrganizationProfile
        appearance={{
          elements: {
            cardBox: {
              boxShadow: 'none',
              maxWidth: '100%',
              border: 'solid 1px var(--color-neutral-100)',
              borderRadius: '4px',
            },
            scrollBox: {
              borderRadius: '0',
              borderLeft: 'solid 1px var(--color-neutral-100)',
              boxShadow: 'none',
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
