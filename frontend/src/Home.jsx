import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';






export default function Home() {
  const rows = useSelector((state)=>state.users)
  const dispatch= useDispatch();
  const handleDelete=(id)=>{
    dispatch(deleteUser({id:id}))
  }
  return (
    <>
   <Link to="/create"> <Button variant="contained" >Create</Button></Link>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">edit</TableCell>
            <TableCell align="right">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nom}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
              <Button variant="contained" color="success">Edit</Button>
              </TableCell>
              <TableCell align="right">
              <Button onClick={()=>handleDelete(rows.id)} variant="contained" color="error">Delete</Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}