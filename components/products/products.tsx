import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import { fetchProducts } from "./productsSlice";
import { useEffect } from "react";
import IphoneCard from "@/module/card/iphoneCard";
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { useState } from "react";
import { Product } from "@/types/types";

const Products = ({ product }: { product: Product[] }) => {
 
  const [active, setActive] = useState<number>(1);
  const [productsData, setProductsData] = useState<Product[]>(product)
  const products = useAppSelector((state) => state.products.productsArr);
  const status = useAppSelector((state) => state.products.productsStatus);

  const dispatch = useAppDispatch();
  const {t} = useTranslation('main');

  const arrButtonSlider = [
    {content: t('all-products'), id: 1},
    {content: 'iPhone', id: 2},
    {content: 'iPad', id: 3},
    {content: 'Mac', id: 4},
    {content: 'Watch', id: 5},
    {content: t('vision'), id: 6},
    {content: 'AirPods', id: 7},
    {content: 'TV & Home', id: 8},
    {content: t('entertainment'), id: 9},
    {content: t('accessory'), id: 10},
   ]
 
  useEffect(() => {
   setProductsData(products)
   dispatch(fetchProducts())
  },[])

  useEffect(() => {
   setProductsData(products)
  },[status])

 const error = status === 'error' ? <div className="products__status">{t('error')}</div> : null;
 const loading = status === 'loading' ? <div className="products__status">{t('loading')}</div> : null;
 const result = status === 'idle' ? productsData.map(({title, price, id, img, filter}) => {
  return <IphoneCard filter={filter} key={id} title={title} price={price} img={img} id={id}/>
 }) : null;

  return (
    <section className="products products_bg">
      <div className="products__main-bg"></div>
      <div className="container">
      <h2 className="products__title">{t('explore')} <span className="products__part-title">{t('product')}</span></h2>
      <div className="products__slider">
        { 
          arrButtonSlider.map(({content, id}) => {
            return <button onClick={() => setActive(id)} className={cn("products__slide-but", {['products__slide-but_active']: active === id})} key={id}>{content}</button>
          })
        }
      </div>
        <div className="products__wrapper">
          {error}
          {loading}
          {result}
        </div>
      </div>
    </section>
  )
}

export default Products;