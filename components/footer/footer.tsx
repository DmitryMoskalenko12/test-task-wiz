import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import React from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const [active, setActive] = useState<boolean>(false);
  const [lang, setLang] = useState<string | null>('en');
  const {locale, locales, push} = useRouter();

  const onSetLang = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.getAttribute('data-lang')) {
      setLang(e.currentTarget.getAttribute('data-lang'))
    }
  }

  const {t} = useTranslation('main');
   
  const shopLearnArr = [
    {content: t('store'), id: 1},
    {content: 'Mac', id: 2},
    {content: 'iPad', id: 3},
    {content: 'iPhone', id: 4},
    {content: 'Watch', id: 5},
    {content: t('vision'), id: 6},
    {content: 'AirPods', id: 7},
    {content: 'TV & Home', id: 8},
    {content: 'AirTag', id: 9},
    {content: 'AirTag', id: 10},
    {content: t('gift-cards'), id: 11},
  ]

   const appleStore = [
    {content: t('find-a-store'), id: 1},
    {content: t('genius-bar'), id: 2},
    {content: t('today-at-apple'), id: 3},
    {content: 'Apple Camp', id: 4},
    {content: t('apple-store-app'), id: 5},
    {content: t('certified-refurbished'), id: 6},
    {content: 'Apple Trade In', id: 7},
    {content: t('financing'), id: 8},
    {content: t('carrier-deals-at-apple'), id: 9},
    {content: t('order-status'), id: 10},
    {content: t('shopping-help'), id: 11},
  ]

  const forBusiness = [
    {content: t('apple-and-business'), id: 1},
    {content: t('shop-for-business'), id: 2},
  ]

  const forEducation = [
    {content: t('apple-and-education'), id: 1},
    {content: t('shop-for-K-12'), id: 2},
    {content: t('shop-for-college'), id: 3},
  ]

  const forHealthcare = [
    {content: t('apple-in-healthcare'), id: 1},
    {content: t('health-on-apple-watch'), id: 2},
    {content: t('health-records-on-iPhone'), id: 3},
  ]

  const entertainment = [
    {content: 'Apple One', id: 1},
    {content: 'Apple TV+', id: 2},
    {content: t('apple-music'), id: 3},
    {content: t('apple-arcade'), id: 4},
    {content: t('apple-fitness+'), id: 5},
    {content: t('apple-news+'), id: 6},
    {content: t('apple-podcasts'), id: 7},
    {content: t('apple-books'), id: 8},
    {content: 'App Store', id: 9},
  ]

  const wallet = [
    {content: t('wallet'), id: 1},
    {content: t('apple-card'), id: 2},
    {content: t('apple-pay'), id: 3},
    {content: t('apple-cash'), id: 4},
  ]

  const account = [
    {content: t('manage-your-apple-ID'), id: 1},
    {content: t('apple-store-account'), id: 2},
    {content: t('iCloud-com'), id: 3},
  ]

  const incorList = [
    {content: t('privacy-policy'), id: 1},
    {content: t('terms-of-use'), id: 2},
    {content: t('sales-and-refunds'), id: 3},
    {content: t('legal'), id: 4},
    {content: t('site-map'), id: 5}
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className='footer__wrapper'>
           <ul className='footer__list'>
              <li><h3 className='footer__title'>{t('shop-learn')}</h3></li>
              {
                shopLearnArr.map(({content, id}) => {
                  return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                })
              }
           </ul>
           <ul className='footer__list'>
              <li><h3 className='footer__title'>Apple Store</h3></li>
              {
                appleStore.map(({content, id}) => {
                  return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                })
              }
           </ul>

            <div className='footer__three-block'>
              <ul className='footer__list'>
                <li><h3 className='footer__title'>{t('for-business')}</h3></li>
                {
                  forBusiness.map(({content, id}) => {
                    return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                  })
                }
              </ul>
              <ul className='footer__list'>
                <li><h3 className='footer__title'>{t('for-education')}</h3></li>
                {
                  forEducation.map(({content, id}) => {
                    return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                  })
                }
              </ul>

              <ul className='footer__list'>
                <li><h3 className='footer__title'>{t('for-healthcare')}</h3></li>
                {
                  forHealthcare.map(({content, id}) => {
                    return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                  })
                }
              </ul>
            </div>

           <ul className='footer__list'>
              <li><h3 className='footer__title'>{t('entertainment')}</h3></li>
              {
               entertainment.map(({content, id}) => {
                  return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                })
              }
           </ul>

           <div className='footer__wallet-account'>
              <ul className='footer__list'>
                  <li><h3 className='footer__title'>{t('apple-wallet')}</h3></li>
                  {
                    wallet.map(({content, id}) => {
                        return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                      })
                  }
              </ul>
              <ul className='footer__list'>
                  <li><h3 className='footer__title'>{t('account')}</h3></li>
                  {
                    account.map(({content, id}) => {
                        return <li key={id}><Link className='footer__link' href={'/'}>{content}</Link></li>
                      })
                  }
              </ul>
           </div>
        </div>

        <hr className='footer__hr'/>

        <div className='footer__incorp-block'>
          <div className='footer__copyr'>{t('copyright')} © {new Date().getFullYear()} Apple Inc. {t('all-rights-reserved')}.</div>
          <ul className='footer__incor-list'>
            {
              incorList.map(({content, id}) => {
                return <li key={id}><Link className='footer__incor-link' href={'/'}>{content}</Link></li>
              })
            }
          </ul>

          <div className='footer__butt-wrap'>
            <button onClick={() => setActive(toggle => !toggle)} className='footer__change-lang'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 19.4858C16.2565 19.4858 19.7821 15.9677 19.7821 11.7037C19.7821 7.4473 16.2565 3.92163 11.9925 3.92163C7.73609 3.92163 4.21796 7.4473 4.21796 11.7037C4.21796 15.9677 7.74363 19.4858 12 19.4858ZM9.92834 11.1236L9.15992 9.99362C8.73051 9.35327 8.03743 9.1122 7.33682 9.45121L6.74921 9.74501C6.26706 9.97855 6.07119 10.3477 6.07119 11.0257C6.07119 11.5606 5.91299 11.8167 5.59658 11.8167C5.53632 11.8167 5.47605 11.8092 5.42331 11.7941C5.42331 11.764 5.42331 11.7339 5.42331 11.7037C5.42331 8.11025 8.39904 5.12699 11.9925 5.12699C12.5123 5.12699 13.0171 5.19479 13.5067 5.30779C13.2657 5.74473 12.8589 5.97074 12.8589 6.58848C12.8589 7.71097 14.3505 7.6281 14.3505 8.87866C14.3505 9.63201 13.7553 9.98608 12.4445 9.98608C11.6836 9.98608 11.1638 10.3854 11.1638 10.9805C11.1638 11.3798 11.3672 11.651 11.8117 11.8845C12.0452 11.99 12.1356 12.1105 12.1356 12.2763C12.1356 12.4721 11.9925 12.5776 11.759 12.5776C11.2618 12.5776 10.6139 12.1407 9.92834 11.1236ZM12 18.2804C8.76065 18.2804 6.02599 15.8622 5.51372 12.7584C5.55138 12.7584 5.58905 12.7584 5.63425 12.7584C6.4328 12.7584 6.97521 12.0729 6.97521 11.0257C6.97521 10.7018 7.02795 10.5963 7.25395 10.4908L7.73609 10.2648C7.99223 10.1368 8.22577 10.2347 8.37644 10.4607L9.22772 11.7113C10.079 12.9543 10.9454 13.459 11.7364 13.459C12.5048 13.459 12.9719 12.9919 12.9719 12.2461C12.9719 11.8167 12.7534 11.44 12.3993 11.214C12.2788 11.1312 12.211 11.0935 12.211 11.0182C12.2034 10.9353 12.2788 10.8976 12.4069 10.8976C14.2827 10.8976 15.262 10.2121 15.262 8.87866C15.262 7.11583 13.7629 7.01789 13.7629 6.56588C13.7629 6.26454 14.1622 6.12894 14.3957 5.59406C16.829 6.56588 18.5768 8.954 18.5768 11.7037C18.5768 12.4043 18.4638 13.0899 18.2528 13.7227C17.8611 13.4063 17.5447 13.2707 17.1831 13.2707C16.8893 13.2707 16.7311 13.346 16.5578 13.3988C16.4147 13.4515 16.3469 13.3912 16.3243 13.2556C16.2414 12.6906 15.8949 12.4797 15.3374 12.4797H14.9456C14.4936 12.4797 14.1245 12.7132 13.8457 13.1426L13.7252 13.3309C13.5293 13.6323 13.3636 13.8734 13.2054 14.0316C13.0472 14.1672 12.9191 14.235 12.6103 14.3329L12.2637 14.4384C11.7439 14.6041 11.5782 15.0637 11.7213 15.5759L12.0904 16.8491C12.2185 17.3162 12.4973 17.5572 12.9493 17.5572C13.1451 17.5572 13.3862 17.4894 13.6423 17.3689L13.7553 17.3086C13.9211 17.2258 14.0492 17.1956 14.1848 17.1956C14.471 17.1956 14.6744 17.3388 14.8854 17.5949C14.0115 18.0318 13.0321 18.2804 12 18.2804ZM14.1697 16.3217C13.9361 16.3217 13.6649 16.4046 13.3711 16.5251L13.1451 16.608C13.0246 16.6532 12.9417 16.6457 12.9116 16.5327L12.5877 15.4479C12.5575 15.3349 12.6027 15.2671 12.7157 15.2294C13.2883 15.0637 13.5971 14.8452 13.793 14.6568C14.0944 14.363 14.343 13.9487 14.5614 13.6323C14.697 13.4214 14.8025 13.346 14.9381 13.346H15.3298C15.4353 13.346 15.4579 13.3837 15.4805 13.4666C15.586 13.9939 15.8723 14.3028 16.3921 14.3028C16.7687 14.3028 16.9495 14.1446 17.1831 14.1446C17.3714 14.1446 17.5824 14.2651 17.9063 14.574C17.394 15.6136 16.603 16.5101 15.6462 17.158C15.3072 16.7285 14.8778 16.3217 14.1697 16.3217Z" fill="#464646"/>
              </svg>
              {lang === "en" ? t('USA,-English') : t('UKR,-ukrainian')}

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 15.847C12.2637 15.8395 12.5048 15.7416 12.7006 15.5306L18.4261 9.66959C18.5918 9.50385 18.6822 9.29292 18.6822 9.04431C18.6822 8.5471 18.2905 8.14783 17.7933 8.14783C17.5522 8.14783 17.3186 8.24576 17.1454 8.41903L12.0075 13.7L6.85464 8.41903C6.68137 8.2533 6.45537 8.14783 6.20676 8.14783C5.70955 8.14783 5.31781 8.5471 5.31781 9.04431C5.31781 9.29292 5.40821 9.50385 5.57395 9.66959L11.3069 15.5306C11.5103 15.7416 11.7363 15.847 12 15.847Z" fill="#464646"/>
              </svg>
            </button>
            <div className={cn('footer__popup', {['footer__popup_active']: active})}>
              {
                locales?.map(l => {
                  return <Link className='footer__lang-choice' onClick={(e) => {onSetLang(e); setActive(false)}} data-lang={l} key={l} href={'/'} locale={l}>{l === 'en' ? t('USA,-English') : t('UKR,-ukrainian')} </Link>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;