import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const LinksSection = () => {
  const {t} = useTranslation('main');

  const arrLinks = [
    {content: t('newsroom'), id: 1},
    {content: t('apple-leadership'), id: 2},
    {content: t('career-opportunities'), id: 3},
    {content: t('investor'), id: 4},
    {content: t('ethic-compliance'), id: 5},
    {content: t('events'), id: 6},
    {content: t('contact-apple'), id: 7}
  ]

  return (
    <section className="links links_bg">
      <div className="container">
        <div className="links__slider">
           {
            arrLinks.map(({content, id}) => {
               return <Link href={'/'} className='links__link' key={id}>{content}</Link>
            })
           }
       </div>
      </div>
    </section>
  )
}

export default LinksSection;