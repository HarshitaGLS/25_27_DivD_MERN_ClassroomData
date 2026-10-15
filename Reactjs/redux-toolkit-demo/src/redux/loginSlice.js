import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"login",
    initialState:{username:"guest",isLoggedIn:false},
    reducers:{ //pure functions
        LOGINUSER:(state,action)=>{
            // console.log(action.payload)
            state.username = action.payload
            state.isLoggedIn = true
        },
        LOGOUT(state,action){
            state.isLoggedIn=false
            state.username=""
        }
    }
})
export const {LOGINUSER,LOGOUT} = loginSlice.actions
export default loginSlice.reducer
export const selectUsername = (state)=>state.login.username
export const selectIsLoggedIn = (state)=>state.login.isLoggedIn

// console.log(loginSlice)


