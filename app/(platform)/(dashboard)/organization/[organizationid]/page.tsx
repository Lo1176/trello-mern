'use client';

const OrganizationIdPage = () => {
  // const user = await currentUser();
  // const { userId } = useAuth();
  // console.log('🚀 ~ OrganizationPage ~ userId:', userId?.sessionId);
  return (
    <div>
      <form>
        <input
          id='title'
          name='title'
          required
          placeholder='Enter a board title'
          className='border border-gray-300 rounded-md p-2 w-full'
        />
      </form>
    </div>
  );
};
export default OrganizationIdPage;
