'use client';

import { useTranslations } from 'next-intl';
import { useState, ChangeEvent, FormEvent } from 'react';
import UploadFile from '../components/uploadfiles'; // Ensure this path is correct

export default function UploadFormPage() {
  const t = useTranslations('');

  
  const [formLink, setFormLink] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  
  const handleFormLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormLink(e.target.value);
  };

  
  const handleFileChange = (file: File | null) => {
    setFile(file);
  };

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form link:', formLink);
    console.log('Selected file:', file);
  };

  return (
    <div className="flex justify-center py-24">
      {/* Left Section: Upload Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-10">
        <h1 className="text-center text-7xl font-extrabold leading-tight">
          {t('Upload')}{' '}
          <span className="bg-span-bg bg-clip-text text-transparent">
            {t('Your Documents')}
          </span>
          <br />
          {t('here')}
        </h1>
        <div className="my-6 text-center text-xl text-text-secondary">
          {t('JPG, PDF only will be accepted')}
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
         
          <UploadFile onFileChange={handleFileChange} />
        </div>
      </section>

      {/* Line  */}
      <div className="border-l border-gray-300 h-auto mx-8"></div>

      {/* Right Section: Form Link Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-10">
        <h1 className="text-center text-6xl font-extrabold leading-tight">
          {t('Add')}{' '}
          <span className="bg-span-bg bg-clip-text text-transparent">
            {t('Your Form Link')}
          </span>
          <br />
          {t('here')}
        </h1>
        <div className="my-6 text-center text-xl text-text-secondary">
          {t('Adding link here will automatically fill your form with your documents information.')}
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="formLink">
                {t('Form Link')}
              </label>
              <input
                type="text"
                id="formLink"
                value={formLink}
                onChange={handleFormLinkChange}
                placeholder={t('Paste your form link here')}
                className="w-full p-4 border border-gray-300 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {t('Submit')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}


// 'use client'
// import { useTranslations } from 'next-intl';
// import UploadFile from '../components/uploadfiles';

// export default function Upload() {
//   const t = useTranslations(''); 

//   return (
//     <div>
//       <section className='flex flex-col items-center justify-center py-24'>
//         <h1 className='text-center text-7xl font-extrabold leading-tight'>
//           {t('Upload')}{' '}
//           <span className='bg-span-bg bg-clip-text text-transparent'>
//             {t('Your Documents')}
//           </span>
//           <br />
//           {t('here')}
//         </h1>
//         <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
//           {t('JPG, PDF only will be accepted')}
//         </div>

//         <div className='mt-4 flex flex-col items-center gap-4'>
        
//           <UploadFile /> 
//         </div>
//       </section>
//     </div>
//   );
// }

// import { useTranslations } from 'next-intl';
// import UploadFile from '../components/uploadfiles';

// export default function Upload() {
//   const t = useTranslations('');

//   return (
//     <div>
//       <section className='flex flex-col items-center justify-center py-24'>
//         <h1 className='text-center text-7xl font-extrabold leading-tight'>
//           {t('Upload')}{' '}
//           <span className='bg-span-bg bg-clip-text text-transparent'>
//             {t('Your Documents')}
//           </span>
//           <br />
//           {t('here')}
//         </h1>
//         <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
//           {t('JPG, PDF only will be accepted')}
//         </div>

//         <div className='mt-4 flex flex-row gap-4'>
//           <UploadFile /> 
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useTranslations } from 'next-intl';
// import Button from '../components/Button';
// import Link from 'next/link';
// import UploadFile from '../components/uploadfiles';

// export default function Upload() {
//   const t = useTranslations('common'); // Replace 'common' with the appropriate namespace

//   const handleFileUpload = (file: File) => {
//     // Handle file upload logic here (e.g., send file to a server)
//     console.log('Uploading file:', file);
//   };

//   return (
//     <div>
//       <section className='flex flex-col items-center justify-center py-24'>
//         <h1 className='text-center text-7xl font-extrabold leading-tight'>
//           {t('Upload')}{' '}
//           <span className='bg-span-bg bg-clip-text text-transparent'>
//             {t('Your Documents ')}
//           </span>
//           <br />
//           {t('here')}
//         </h1>
//         <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
//           {t('JPG, PDF only will be accepted ')}
//         </div>

//         <div className='mt-4 flex flex-row gap-4'>
//           <UploadFile onUpload={handleFileUpload} /> {/* Add the UploadFile component */}
//           {/* If you need additional buttons or links, you can include them here */}
//           {/* <Link href='/en/about'>
//             <Button rounded size='large' variant='secondary'>
//               {t('About')}
//             </Button>
//           </Link> */}
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useTranslations } from 'next-intl'
// import Button from '../components/Button'
// import Link from 'next/link'

// export default function Upload() {
//   const t = useTranslations('') // Replace 'common' with the appropriate namespace

//   return (
//     <div>
//       <section className='flex flex-col items-center justify-center py-24'>
//         <h1 className='text-center text-7xl font-extrabold leading-tight'>
//           {t('Upload')}{' '}
//           <span className='bg-span-bg bg-clip-text text-transparent'>
//             {t('Your Documents ')}
//           </span>
//           <br />
//           {t('here')}
//         </h1>
//         <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
//           {t(
//             'Jpg, pdf only will be accepted '
//           )}
//         </div>

//         <div className='mt-4 flex flex-row gap-4'>
//           <Link href='/en/upload'>
//             <Button rounded size='large'>
//               {t('Upload')}
//             </Button>
//           </Link>
//           {/* <Link href='/en/about'>
//             <Button rounded size='large' variant='secondary'>
//               {t('About')}
//             </Button>
//           </Link> */}
//         </div>
//       </section>
//     </div>
//   )
// }

// import { useTranslations } from 'next-intl'
// import Button from './components/Button'
// import { Link } from '@/src/navigation'

// export default function Upload() {
//   const t = useTranslations('')
//   return (
//     <div>
//       <section className='flex flex-col items-center justify-center py-24'>
//         <h1 className='text-center text-7xl font-extrabold leading-tight'>
//           {t('Form Filler by')}{' '}
//           <span className='bg-span-bg bg-clip-text text-transparent'>
//             {t('Extracting Info')}
//           </span>
//           <br />
//           {t('from Documents')}
//         </h1>
//         <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
//           {t(
//             'Safe, Free, Easy to Use Website that Automatically Fills your Forms Just by Uploading your Documents with Us. ')}
//         </div>
        
//         <div className='mt-4 flex flex-row gap-4'>
    
//          <a
//             href='/en/upload'
//            >
//             <Button rounded size='large'>
//               {t('Upload your document')}
//             </Button>
//           </a>
//           <a
//             href='/en/about'
//             >
//             <Button rounded size='large' variant='secondary'>
//               {t('About')}
//             </Button>
//           </a> 
//         </div>
//       </section>