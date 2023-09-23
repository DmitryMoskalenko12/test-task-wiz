import '@/styles/globals.scss'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../ui/button.scss';
import '../components/header/header.scss';
import '../components/elevating/elevating.scss';
import '../components/iphone/iphone.scss';
import '../module/card/iphoneCard.scss';
import '../components/products/products.scss';
import '../components/stream/stream.scss';
import '../components/links-section/links-section.scss';

import Head from 'next/head';
import Layout from '@/components/layout/layout';

 function MyApp({ Component, pageProps }: AppProps) {

  return  <Provider store={store}>
            <Layout>
              <Head>
                <title>Test-task</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Component {...pageProps} />
          </Layout>
         </Provider>
}

export default appWithTranslation(MyApp)