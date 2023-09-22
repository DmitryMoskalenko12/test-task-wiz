import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import { fetchIphone } from "./iphoneSlice";
import { useEffect } from "react";
import IphoneCard from "@/module/card/iphoneCard";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Iphone = () => {
  const iphones = useAppSelector((state) => state.iphone.iphoneArr);
  const dispatch = useAppDispatch();
  const {t} = useTranslation('main');

  useEffect(() => {
   dispatch(fetchIphone())
  },[])

  return (
    <section className="iphone iphone_bg">
      <div className="iphone__main-bg"></div>
      <div className="container">
        <div className="iphone__title-block">
          <h2 className="iphone__title">{t('get-your')}</h2>
            <Link className="iphone__see-all" href={'/'}>{t('see-all')} 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.1267 11.6962C19.1267 11.4627 19.0287 11.2367 18.8555 11.0709L13.906 6.12143C13.7101 5.93309 13.5067 5.85022 13.2958 5.85022C12.8136 5.85022 12.4671 6.18923 12.4671 6.64877C12.4671 6.88984 12.565 7.09324 12.7157 7.24391L14.4107 8.96155L16.5954 10.9579L14.8476 10.8525H5.71707C5.21232 10.8525 4.86578 11.199 4.86578 11.6962C4.86578 12.1859 5.21232 12.5324 5.71707 12.5324H14.8476L16.5954 12.4269L14.4107 14.4233L12.7157 16.141C12.565 16.2916 12.4671 16.495 12.4671 16.7361C12.4671 17.1956 12.8136 17.5347 13.2958 17.5347C13.5067 17.5347 13.7101 17.4518 13.8909 17.2785L18.8555 12.3139C19.0287 12.1482 19.1267 11.9222 19.1267 11.6962Z" fill="#181818"/>
              </svg>
            </Link>
        </div>
        <div className="iphone__wrapper">
           {
            iphones.map(({title, price, id, img}) => {
             return <IphoneCard key={id} title={title} price={price} img={img} id={id}/>
            })
           }
        </div>
      </div>
    </section>
  )
}

export default Iphone;