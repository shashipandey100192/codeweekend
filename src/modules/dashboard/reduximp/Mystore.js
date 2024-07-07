import { configureStore } from "@reduxjs/toolkit";
import myactions from './Myactions'

export const mystore = configureStore({
    reducer: {
        counter: myactions
    },
  })