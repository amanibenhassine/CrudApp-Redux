import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {userList }from "./Data.jsx";
const initialState = [
    { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
    { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
  ];


  export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const response = await fetch("/users");
    const users = await response.json();
    return users;
  });
const userSlice =createSlice ({
    name:"users",
    initialState,
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