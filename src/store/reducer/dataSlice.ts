import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { RootState } from '../store';

export interface product {
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
  pageList: number[]
  currentPage: number
}

const initialState: dataState = {
  entities: [null],
  totalPages: 0,
  pageList: [],
  currentPage: 1,
}

interface thunkProps {
  count: number
  page: number
  filter?: string[] | undefined
  type?: string | undefined
}

export const fetchProducts = createAsyncThunk(
  'data/fetchProducts',
  async (props: thunkProps) => {
    if (props.filter && props.type) {
      const response = await fetch(`https://lfnn.site/API/products?count=${props.count}&page=${props.page}&filter=${props.filter}&type=${props.type}`)
      const data = await response.json()
      console.log(data, response)
      console.log('filtred + typed dispatch')
      return data
    }
    if (props.filter) {
      const response = await fetch(`https://lfnn.site/API/products?count=${props.count}&page=${props.page}&filter=${props.filter}`)
      const data = await response.json()
      console.log(data, response)
      console.log('filtred dispatch')
      return data
    }
    if (props.type) {
      const response = await fetch(`https://lfnn.site/API/products?count=${props.count}&page=${props.page}&type=${props.type}`)
      const data = await response.json()
      console.log(data, response)
      console.log('typed dispatch')
      return data
    }
    else {
      const response = await fetch(`https://lfnn.site/API/products?count=${props.count}&page=${props.page}`)
      const data = await response.json()
      console.log(data, response)
      console.log('unfiltred dispatch')
      return data
    }
  }
)

function createArray (page: number): [number] {
  const arr: any = []
  for (let i:number = 0; i<page; i++){
    arr.push(i+1)
  }
  return arr
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    switchCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    wipePageData: (state) => {
      state.currentPage = 1
      state.pageList = []
      state.totalPages = 0
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: dataState, action: PayloadAction) => {;
      })
      .addCase(fetchProducts.fulfilled, (state: dataState, action: PayloadAction<[[T: product], number]>) => {
        console.log(action)
        state.entities = action.payload[0]
        state.totalPages = action.payload[1]
        state.pageList = createArray(action.payload[1])
      });
  },
})
export const {switchCurrentPage, wipePageData} = dataSlice.actions;

export const selectData = (state: RootState) => state.data.entities;
export const selectPages = (state: RootState) => state.data.totalPages;
export const selectPageList = (state: RootState) => state.data.pageList;
export const selectCurrentPage = (state: RootState) => state.data.currentPage;

export default dataSlice.reducer;
