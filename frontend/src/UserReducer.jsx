import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {userList }from "./Data.jsx";
const initialState = [
    { id: "1", name: "amani", email: "amani@gmail.com" },
    { id: "2", name: "ahmed", email: "ahmed@gmail.com" },
  ];


  export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      throw error; 
    }
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