import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";
const Product = () => {
  const [productList, setProductList] = useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")

        // .then((res) => res.json())
        .then((data) => {
          setProductList(data.data);
          console.log("data", data);
        })
        .catch((error) => window.alert(error.message));
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }, []);
  console.log("Products", productList);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Product List
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ background: "#d76112ff" }}>
            <TableRow sx={{}}>
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>Title</strong>
              </TableCell>
              <TableCell>
                <strong>Body</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.body}</TableCell>
                <TableCell>
                  <Box>
                     <Button onclick={()=>navigate(`/admim/edit/${product.id}`)}><EditIcon/></Button>
                     
                     <Button><DeleteIcon/></Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Product;

