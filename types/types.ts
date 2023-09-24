
export type cartItem = {
  title: string,
  price: string,
  img: string,
  filter: string;
  id: number
}

export type CartListState = {
  iphoneArr: Array<cartItem>,
  iphoneStatus: string
}

export type CartListStateIphone = {
  productsArr: Array<cartItem>,
  productsStatus: string
}

export interface Product {
  title: string;
  price: string;
  img: string;
  filter: string;
  id: number;
}

export interface IPhoneModel {
  title: string;
  price: string;
  img: string;
  filter: string;
  id: number;
}