import Image from "next/image";
import { useTranslation } from 'next-i18next';

const Stream = () => {
  const {t} = useTranslation('main');

  return (
    <section className="stream stream_bg">
      <div className="container">
       <div className="stream__wrapper">
         <div className="stream__slide">
           <h3 className="stream__title-slide1">{t('Silo')}</h3>
           <Image className="stream__slide-img" src={'/images/stream1.png'} width={88} height={480} alt="Stream"/>
         </div>

         <div className="stream__slide">
           <h3 className="stream__title-slide2">{t('Platonic')}</h3>
           <Image className="stream__slide-img" src={'/images/stream2.png'} width={88} height={480} alt="Stream"/>
         </div>

         <div className="stream__slide-show">
         <div className="stream__title-name">
             <h2 className="stream__title">{t('HIJACK')}</h2>
             <div className="stream__name">{t('Thriller')}</div>
         </div>
         
         <Image className="stream__img" src={'/images/stream3.png'} width={872} height={480} alt="Stream"/>
         
         <button content={t('details')} className="stream__button">{t('stream-now')} 
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.9925 19.4933C16.264 19.4933 19.7896 15.9676 19.7896 11.7037C19.7896 7.43973 16.2564 3.91406 11.9849 3.91406C7.72099 3.91406 4.20285 7.43973 4.20285 11.7037C4.20285 15.9676 7.72852 19.4933 11.9925 19.4933ZM15.036 12.1482L10.5234 14.7924C10.1543 15.0109 9.72489 14.8225 9.72489 14.4459V8.97656C9.72489 8.59235 10.1769 8.41909 10.5234 8.62249L15.036 11.2818C15.3599 11.4777 15.3675 11.9523 15.036 12.1482Z" fill="#E8E8E8"/>
           </svg>
        </button>
         </div>

         <div className="stream__slide">
           <h3 className="stream__title-slide3">{t('crodwen-room')}</h3>
           <Image className="stream__slide-img" src={'/images/stream4.png'} width={88} height={480} alt="Stream"/>
         </div>

         <div className="stream__slide">
           <h3 className="stream__title-slide4">{t('swagger')}</h3>
           <Image className="stream__slide-img" src={'/images/stream5.png'} width={88} height={480} alt="Stream"/>
         </div>
       </div>
      </div>
    </section>
  )
}

export default Stream;