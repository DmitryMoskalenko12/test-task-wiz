import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Button from '@/ui/button';

const Elevating: React.FC = () => {
  const {t} = useTranslation('main');

  return (
    <section className="elevating elevating_main-bg">
      <div className="container">
        <div className="elevating__wrapper">
          <div className="elevating__content">
            <div className='elevating__sub-block'>
               <div className='elevating__mini-block'>
                  <h1 className='elevating__h1'>{t('elevating')}</h1>
                  <Image className='elevating__apple1' src={'/images/elev1.png'} width={192} height={57} alt='apple1'/>
               </div>
               <div className='elevating__h1'>{t('pro-level')}</div>
               <div className='elevating__mini-block'>
                  <Image className='elevating__apple2' src={'/images/elev2.png'} width={151} height={57} alt='apple2'/>
                  <div className='elevating__h1'>{t('vision-pro')}</div>
               </div>
            </div>

             <p className='elevating__text'>
              {t('vision-pro-text')}
             </p>

             <Button clazz='button_center' content={t("order")}/>
          </div>

           <div className='elevating__slider'>
             <Image src={'/images/slider.png'} width={683} height={987} alt='You will see women with Vision Pro'/>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Elevating;