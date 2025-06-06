import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-neutral-900 text-white py-4 border-t border-t-white shadow-sm'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} FlowBoard. All rights reserved.</p>
        <p>
          <Link
            // href='/privacy-policy'
            href='/'
            className='text-gray-400 hover:text-white'
          >
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link
            // href='/terms-of-service'
            href='/'
            className='text-gray-400 hover:text-white'
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
