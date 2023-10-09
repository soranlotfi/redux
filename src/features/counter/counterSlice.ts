// DUCKS PATTERN
import {ActionCreatorWithoutPayload, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface counterState {
    value: number
}

//represent the shape of the state inside our slide inside our reducer

const initialState: counterState = {
    value: 10
};

const counterSlice= createSlice({
    name: "counter",
    initialState,
    reducers: {
        //     increment
        incremented(state) {
            // its ok to do because we can directly change the state with immer js and redux toolkit uses immer js and immer makes it immutable under the hood
            state.value++
        },
        //     decrement
        decremented(state) {
            state.value--
        },
    //     Amount Adde
        amountAdded(state , action :PayloadAction<number>){
            state.value+=action.payload
        }
    }
})

export const {incremented , amountAdded} = counterSlice.actions
export default counterSlice.reducer
