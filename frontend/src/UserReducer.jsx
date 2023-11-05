import { createSlice } from "@reduxjs/toolkit";
import {userList }from "./Data.jsx";

const userSlice =createSlice ({
    name:"profile",
    initialState:userList,
    reducers:{
        getUser:(state,action)=>
        {
            return state;
        },
       
        addUser:(state,action)=>
        {
            state.push(action.payload);
            console.log(action);
        },
        editUser:(state,action)=>
          {
            const {id, name, email}= action.payload;
            const update = state.find(user => user.id == id );
            if(update){
                update.name=name;
                update.email=email;
            }
        },
        deleteUser:(state,action)=>
            {
                const {id} = action.payload;
                const uu = state.find(user => user.id ==  id);
                if(uu){
                    return state.filter(f => f.id !== id)
                }
            }}
})

    
export const  {getUser, addUser, editUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;