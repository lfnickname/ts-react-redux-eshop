import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { RootState } from '../store';

interface product {
  id: number
  name: string
  price: number
  subtitle: string
  tag: [T: string]
  type: string
  url: string
}

export interface dataState {
  entities: [T: product | null]
  totalPages: number
}

const initialState: dataState = {
  entities: [null],
  totalPages: 0
} as dataState

interface thunkProps {
  count: number
  page: number
}

export const fetchProducts = createAsyncThunk(
  'data/fetchProducts',
  async (props: thunkProps) => {
    const response = await fetch(`https://lfnn.site/API/products?count=${props.count}&page=${props.page}`)
    const data = await response.json()
    console.log(data, response)
    return data
  }
)


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: dataState, action: PayloadAction) => {;
      })
      .addCase(fetchProducts.fulfilled, (state: dataState, action: PayloadAction<[[T: product], number]>) => {
        console.log(action)
        state.entities = action.payload[0]
        state.totalPages = action.payload[1]
      });
  },
})
export const {} = dataSlice.actions;

export const selectData = (state: RootState) => state.data.entities;
export const selectPages = (state: RootState) => state.data.totalPages;

export default dataSlice.reducer;
