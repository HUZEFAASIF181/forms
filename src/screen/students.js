import { useEffect, useState } from "react";
import { getData } from "../config/firebasemethods";

// function StudentList() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getData("students")
//       .then((res) => {
//         console.log(res);
//         setData(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <>
//       <h1>Student List</h1>
//       <table>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>CNIC</th>
//         </tr>
//         <tbody>
//           {data && data.length > 0
//             ? data.map((x) => (
//                 <tr>
//                   <td>{x.firstName}</td>
//                   <td>{x.lastName}</td>
//                   <td>{x.cnic}</td>
//                 </tr>
//               ))
//             : null}
//         </tbody>
//       </table>
//     </>
//   );
// }
// export default StudentList;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData("students")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <div className='bgDark'>
        <h1>Students</h1>
      </div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>CNIC&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0
            ? data.map((x) => (
              <StyledTableRow key={x.name}>
                <StyledTableCell>{x.firstName}</StyledTableCell>
                <StyledTableCell>{x.lastName}</StyledTableCell>
                <StyledTableCell>{x.cnic}</StyledTableCell>
              </StyledTableRow>
            )) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}