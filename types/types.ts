
export type cartItem = {
  title: string,
  price: string,
  img: string,
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
