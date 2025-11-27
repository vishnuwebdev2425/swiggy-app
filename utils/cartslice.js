import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        things:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.things.push(action.payload)
        },
        removeItem:(state)=>{
            state.things.pop()
        },
        Clearcart:(state)=>{
            state.things.length=0
        }
    }
})

export const{addItem,removeItem,Clearcart}=cartSlice.actions

export default cartSlice.reducer