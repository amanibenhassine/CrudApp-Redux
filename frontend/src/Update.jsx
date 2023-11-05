import React, { useState , useEffect  } from 'react'
import {Container,Input,Button} from '@mui/material'
import {useDispatch ,useSelector} from 'react-redux'
import { addUser, editUser } from './UserReducer';
import { useNavigate, useParams} from "react-router-dom"
import { userList } from './Data';


function Update() {
  const { id } = useParams();
  const numericId = Number(id); // Convert the id from string to number


  const user = useSelector((state) =>
  state.users.find((user) => user.id === numericId)
);
  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);
    const dispatch = useDispatch();
    const Navigate= useNavigate();

 const handleClick =(e)=>
 { e.preventDefault();
  dispatch(editUser({
    id:numericId,
    name:name,
    email:email,
  }));
  Navigate('/')
 };
 console.log('user:', user);
 console.log('numericId:', numericId);
 console.log('name:', name);
 console.log('email:', email);




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