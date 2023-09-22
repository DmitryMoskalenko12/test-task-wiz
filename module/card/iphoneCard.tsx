import Image from "next/image";
import Button from '../../ui/button';
import { useTranslation } from 'next-i18next';
import { cartItem } from "@/types/types";

const IphoneCard: React.FC<cartItem> = ({title, id, img, price}) => {
  const {t} = useTranslation('main');

  return (
    <article className="card">
      <div className="card__wrapper">
         <div className="card__title-price">
             <h2 className="card__title">{title}</h2>
             <div className="card__price">{t('from')} {price}</div>
         </div>
         
         <Image className="card__img" src={img} width={264} height={344} alt="You will see iphone"/>
         
         <Button content={t('details')} clazz='button_wh'/> 
      </div>
    </article>
  )
  }

  export default IphoneCard;