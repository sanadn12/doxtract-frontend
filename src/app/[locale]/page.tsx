

import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { Link } from '@/src/navigation'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('Form Filler by')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Extracting Info')}
          </span>
          <br />
          {t('from Documents')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Safe, Free, Easy to Use Website that Automatically Fills your Forms Just by Uploading your Documents with Us. ')}
        </div>
        
        <div className='mt-4 flex flex-row gap-4'>
    
         <a
            href='/en/upload'
           >
            <Button rounded size='large'>
              {t('Upload your document')}
            </Button>
          </a>
          <a
            href='/en/upload'
            >
            <Button rounded size='large'>
              {t('Add Form Link')}
            </Button>
          </a> 
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Upload')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Just upload your documents with us securely'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Fetching')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'We will fetch your details from your uploaded documents and store in our server'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Give Form Links')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Now you need nothing to do just give us your form link we will fill it and submit it'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
