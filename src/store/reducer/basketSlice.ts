import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { RootState } from '../store';

export interface product {
    id: number
    name: string
    price: number
    subtitle: string
    tag: string[]
    type: string
    url: string
  }

export interface itemId {
    [T:number]: number
}

export interface dataState {
    idList: {
        [T: string]: boolean
    }
    entities: [T?: product] | any
    totalPrice: number
}

const initialState: dataState = {
    idList: {},
    entities: [],
    totalPrice: 0,
}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<product>) => {
        const targetId = action.payload.id
      if (state.idList[targetId]!=true) {
          state.idList[targetId] = true
          state.entities = [...state.entities, action.payload]
          state.totalPrice = state.totalPrice + action.payload.price
      }
    },
    removeFromBasket: (state, action: PayloadAction<product>) => {
        const targetId = action.payload.id
        if (state.idList[targetId]==true) {
            state.idList[targetId] = false
            state.entities = [...state.entities.filter((item: product)=> item.id != targetId)]
            state.totalPrice = state.totalPrice - action.payload.price
        }
    },
}})
export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectBasketData = (state: RootState) => state.basket.entities
export const selectBasketTotalPrice = (state: RootState) => state.basket.totalPrice

export default basketSlice.reducer;
