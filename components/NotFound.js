import Image from 'next/image'
const NotFound = () => {
  return (
    <div className='mt-5 p-5 w-10/12 mx-auto rounded-md bg-gray-200'>
      <div className="  mx-auto w-10/12 bg-white">
          <Image src='/oops2.jpg' alt='Not Found'height='150px' width='100px' />
          <h1 className='font-bold tex-black'>Not Found</h1>
          </div>;
    </div>
  );
};

export default NotFound;
