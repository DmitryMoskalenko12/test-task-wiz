import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '@/hooks/http.hook';
import { CartListStateIphone } from '@/types/types';

const initialState: CartListStateIphone = {
  productsArr: [],
  productsStatus: 'idle'
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
   const {request} = useHttp();
   return await request("https://wizx-d01a6-default-rtdb.firebaseio.com/products.json")
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder
    .addCase(fetchProducts.pending, state => {
      state.productsStatus = 'loading';
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsStatus = 'idle';
      state.productsArr = action.payload;
     })
    .addCase(fetchProducts.rejected, state => {
      state.productsStatus = 'error';
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = productsSlice;

export const {} = actions;
export default reducer;