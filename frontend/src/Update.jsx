import React, { useState } from 'react'
import {Container,Input,Button} from '@mui/material'
import {useDispatch ,useSelector} from 'react-redux'
import { addUser, editUser } from './UserReducer';
import {useLocation, useNavigate, useParams} from "react-router-dom"


function Update() {
    const userId = useParams();
    console.log(userId);
    const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const dispatch = useDispatch();
    

 const handleClick =()=>
 {
  dispatch(editUser({
    id:userId,
    name,
    email
  }))
 }




  return (
    <Container>  
      
      <h1> update user</h1>
      <Input placeholder="entre name" fullWidth	value={name} onChange={(e)=>setName(e.target.value)}></Input>
      <Input placeholder ="enter email "fullWidth value={email}	onChange={(e)=>setEmail(e.target.value)}></Input>
      <Button variant="contained" color="success"onClick={handleClick} >add</Button>

      
   </Container>
  )
}

export default Update