import { OrganizationList } from '@clerk/nextjs';

export default function CreateSOrganizationPage() {
  return (
    <div>
      <h1>Select Organization</h1>
      <p>This is the select organization page.</p>
      <p>Please choose your organization to continue.</p>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl='/organization/:id'
        afterCreateOrganizationUrl='/organization/:id'
      />
    </div>
  );
}
