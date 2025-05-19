import { ClerkProvider } from '@clerk/nextjs';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className='flex min-h-screen items-center justify-center'>
        {children}
      </div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
