import { TFunction } from 'next-i18next';

export const request = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${response.url}, status: ${response.status}`);
  }

  const data = await response.json();
  const arr = [];

  for (const key in data) {
    arr.push({
      id: key,
      ...data[key]
    });
  }

  return arr
}

export const shopLearnArr = (t: TFunction) => {
  return [
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
}

 export const appleStore = (t: TFunction) => {
  return [
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
 }

export const forBusiness = (t: TFunction) => {
  return [
    {content: t('apple-and-business'), id: 1},
    {content: t('shop-for-business'), id: 2},
  ]
}

export const forEducation = (t: TFunction) => {
  return [
    {content: t('apple-and-education'), id: 1},
    {content: t('shop-for-K-12'), id: 2},
    {content: t('shop-for-college'), id: 3},
  ]
}

export const forHealthcare = (t: TFunction) => {
  return [
    {content: t('apple-in-healthcare'), id: 1},
    {content: t('health-on-apple-watch'), id: 2},
    {content: t('health-records-on-iPhone'), id: 3},
  ]
}

export const entertainment = (t: TFunction) => {
  return [
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
}

export const wallet = (t: TFunction) => {
  return [
    {content: t('wallet'), id: 1},
    {content: t('apple-card'), id: 2},
    {content: t('apple-pay'), id: 3},
    {content: t('apple-cash'), id: 4},
  ]
}

export const account = (t: TFunction) => {
  return [
    {content: t('manage-your-apple-ID'), id: 1},
    {content: t('apple-store-account'), id: 2},
    {content: t('iCloud-com'), id: 3},
  ]
}

export const incorList = (t: TFunction) => {
  return [
    {content: t('privacy-policy'), id: 1},
    {content: t('terms-of-use'), id: 2},
    {content: t('sales-and-refunds'), id: 3},
    {content: t('legal'), id: 4},
    {content: t('site-map'), id: 5}
  ]
}