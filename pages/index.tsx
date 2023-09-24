import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Elevating from '@/components/elevating/elevating';
import Iphone from '@/components/iphone/iphone';
import Products from '@/components/products/products';
import Stream from '@/components/stream/stream';
import LinksSection from '@/components/links-section/links-section';
import { Product, IPhoneModel } from '@/types/types';
import { request } from '@/helpers/helpers';

export default function Home({ products, iphones }: { products: Product[], iphones: IPhoneModel[] }) {

  return (
    <>
      <Elevating/>
      <Iphone iphones={iphones}/>
      <Products product={products}/>
      <Stream/>
      <LinksSection/>
    </>
  )
}

export async function getStaticProps({locale}: { locale: string }) {
  const products = await request('https://wizx-d01a6-default-rtdb.firebaseio.com/products.json');
  const iphones = await request('https://wizx-d01a6-default-rtdb.firebaseio.com/iphone.json');

  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
      products: products,
      iphones
    }
  }
}
