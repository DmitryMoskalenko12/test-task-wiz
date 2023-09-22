import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Elevating from '@/components/elevating/elevating';
import Iphone from '@/components/iphone/iphone';
import Products from '@/components/products/products';
import Stream from '@/components/stream/stream';

export default function Home() {

  return (
    <>
      <Elevating/>
      <Iphone/>
      <Products/>
      <Stream/>
    </>
  )
}

export async function getStaticProps({locale}: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main']))
    }
  }
}
