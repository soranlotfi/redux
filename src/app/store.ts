import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.ts"
import {apiSlice} from "../features/data/dataApiSlice.ts";
//it automatically sets up wth the right defaults (add on the redux toolkit and add the thunk middleware , turns on some development checks )

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware : (getDefaultMiddleware)=>{
        return  getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
//this type updates automatically when we add more slices (hover mouse to know more a bout it :))