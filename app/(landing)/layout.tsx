import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-100'>
      <Navbar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
