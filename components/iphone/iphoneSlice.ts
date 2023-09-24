import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '@/hooks/http.hook';
import { CartListState } from '@/types/types';

const initialState: CartListState = {
  iphoneArr: [],
  iphoneStatus: 'idle'
}

export const fetchIphone = createAsyncThunk(
  'iphone/fetchIphone',
  async () => {
   const {request} = useHttp();
   return await request("https://wizx-d01a6-default-rtdb.firebaseio.com/iphone.json")
  }
)

const basketSlice = createSlice({
  name: 'iphone',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder
    .addCase(fetchIphone.pending, state => {
      state.iphoneStatus = 'loading';
    })
    .addCase(fetchIphone.fulfilled, (state, action) => {
      state.iphoneStatus = 'idle';
      state.iphoneArr = action.payload;
     })
    .addCase(fetchIphone.rejected, state => {
      state.iphoneStatus = 'error';
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = basketSlice;

export const {} = actions;
export default reducer;