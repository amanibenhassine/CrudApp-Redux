import React, { useState } from 'react'
import {Container,Input,Button} from '@mui/material'
import {useDispatch ,useSelector} from 'react-redux'
import { addUser } from './UserReducer';
import {useNavigate} from "react-router-dom"
function Update() {





  return (
    <Container>  
      
      <h1> update user</h1>
      <Input placeholder="entre name" fullWidth	></Input>
      <Input placeholder ="enter email "fullWidth	></Input>
      <Button variant="contained" color="success" >add</Button>

      
   </Container>
  )
}

export default Update