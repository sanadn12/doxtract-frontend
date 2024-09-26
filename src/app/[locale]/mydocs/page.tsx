import { useTranslations } from 'next-intl'

export default function Mydocs() {
  const t = useTranslations('')
  return (
    <div className='px-32 py-24 text-center text-2xl'>
      {t(
        'your documents'
      )}
    </div>
  )
}
