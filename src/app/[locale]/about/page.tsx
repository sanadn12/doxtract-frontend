import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('');

  return (
    <div className='px-32 py-24 text-center text-2xl'>
      {t('We, the students of Rizvi College of Engineering studying in TE AI&DS')}
      <br />
      <br />
      {t('Sanad Naqvi, Arman Sayyed, Saniya Sayyed and Sara Batatawala')}
      <br />
      <br />
      {t('We have created this website to simplify document digitization. Our platform leverages cutting-edge Optical Character Recognition (OCR) technology to convert physical documents into searchable, editable digital formats with ease.')}
      <br /><br />
      {t('With a focus on user-friendly design, accuracy, and speed, our goal is to provide a seamless solution for individuals and businesses looking to transform their paperwork into organized, accessible files.')}
      <br /><br />
      {t('We are committed to making document management smarter, faster, and more efficient.')}

     
      <footer className='mt-12 border-t pt-8 bg-background py-8'>
        <div className='flex justify-between px-32'>
          <div className='flex flex-col items-start'>
            <p className='text-lg font-semibold mb-2'>{t('Email Us')}</p>
            <p className='text-md mb-1'>{t('Email 1:')} <a href="ni.sanad1233@gmail.com" className='text-blue-600 hover:underline'>ni.sanad1233@gmail.com</a></p>
            <p className='text-md mb-1'>{t('Email 2:')} <a href="mailto:armansayyed303@gmail.com" className='text-blue-600 hover:underline'>armansayyed303@gmail.com</a></p>
            <p className='text-md mb-1'>{t('Email 3:')} <a href="mailto:sayyedsaniyafarookh@gmail.com" className='text-blue-600 hover:underline'>sayyedsaniyafarookh@gmail.com</a></p>
            <p className='text-md mb-1'>{t('Email 4:')} <a href="mailto:sarabatatawala26@gmail.com" className='text-blue-600 hover:underline'>sarabatatawala26@gmail.com</a></p>
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-lg font-semibold mb-2'>{t('Call Us')}</p>
            <p className='text-md mb-1'>{t('Phone 1:')} <a href="mob:+91 8779500564" className='text-blue-600 hover:underline'>+91 8779500564</a></p>
            <p className='text-md mb-1'>{t('Phone 2:')} <a href="mob:+91 9324600804" className='text-blue-600 hover:underline'>+91 9324600804</a></p>
            <p className='text-md mb-1'>{t('Phone 3:')} <a href="mob:+91 9167868154" className='text-blue-600 hover:underline'>+91 9167868154</a></p>
            <p className='text-md mb-1'>{t('Phone 4:')} <a href="mob:+91 9136302816" className='text-blue-600 hover:underline'>+91 9136302816</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}


// import { useTranslations } from 'next-intl'

// export default function About() {
//   const t = useTranslations('')
//   return (
//     <div className='px-32 py-24 text-center text-2xl'>
//       {t(
//         'We, the students of Rizvi College of Engineering studying in TE AI&DS'
//       )}
//       <br />
//       <br />
//       {t(
//         'Sanad Naqvi, Arman Sayyed, Saniya Sayyed and Sara Batatawala'
//       )}
//       <br />
//       <br />
//       {t(
//         'We have created this website to simplify document digitization. Our platform leverages cutting-edge Optical Character Recognition (OCR) technology to convert physical documents into searchable, editable digital formats with ease. '
//       )}
//       <br /><br />
//       {t(
//         'With a focus on user-friendly design, accuracy, and speed, our goal is to provide a seamless solution for individuals and businesses looking to transform their paperwork into organized, accessible files.'
//       )}
//       <br /><br />
//       {t(
//         'We are committed to making document management smarter, faster, and more efficient.'
//       )}
//     </div>

//   )
// }
