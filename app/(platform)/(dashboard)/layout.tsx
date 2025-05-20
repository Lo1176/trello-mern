import { NavbarOrganization } from '@/components/organization/navbar-organization';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <NavbarOrganization />
      {children}
    </div>
  );
};

export default DashboardLayout;
