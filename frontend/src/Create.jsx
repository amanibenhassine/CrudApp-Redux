import React, { useState } from 'react'
import {Container,Input,Button} from '@mui/material'
import {useDispatch ,useSelector} from 'react-redux'
import { addUser } from './UserReducer';
import {useNavigate} from "react-router-dom"




function Create() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
const [email,setEmail] = useState ('');
const dispatch= useDispatch();
const usersCount= useSelector((state)=>state.users.length);
const navigate = useNavigate()

const handleClick = () => {
  
    dispatch(
      addUser({
        id: usersCount + 1,
        name:name,
        email:email,
      })
      
    )
    navigate('/')
  }

  return (
    <Container>  
      
      <h1>add new user</h1>
      <Input placeholder="entre name" value={name} onChange={e=>setName(e.target.value)} fullWidth	></Input>
      <Input placeholder ="enter email "value={email} onChange={e=>setEmail(e.target.value)}fullWidth	></Input>
      <Button variant="contained" color="success" onClick={handleClick}>add</Button>

      
   </Container>
  )
}

export default Create