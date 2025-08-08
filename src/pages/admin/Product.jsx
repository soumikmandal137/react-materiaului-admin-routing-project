// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
//   Button,
// } from "@mui/material";
// import axios from "axios";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useNavigate } from "react-router-dom";

// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// const Product = () => {
//   const [productList, setProductList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((data) => {
//         setProductList(data.data.products);
//         console.log("data", data);
//       })
//       .catch((error) => {
//         console.error(error);
//         alert(error.message);
//       });
//   }, []);

//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//       setOpen(true);
//     };

//     const handleClose = () => {
//       setOpen(false);
//     };

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Product List
//       </Typography>
//       <TableContainer component={Paper} elevation={3}>
//         <Table>
//           <TableHead sx={{ background: "#d76112ff" }}>
//             <TableRow>
//               <TableCell>
//                 <strong>ID</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Title</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Description</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Action</strong>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {productList?.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell>{product.id}</TableCell>
//                 <TableCell>{product.title}</TableCell>
//                 <TableCell>{product.description}</TableCell>
//                 <TableCell>

//                   <Box>
//                     <Button onClick={() => navigate(`/admin/edit/${product.id}`)}>
//                       <EditIcon />
//                     </Button>
//                     <Button variant="outlined" onClick={handleClickOpen}>
//                       <DeleteIcon />

//        <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="delete-dialog-title"
//         aria-describedby="delete-dialog-description"
//       >
//         <DialogContent>
//           <DialogContentText id="delete-dialog-description">
//             Are you sure you want to delete this product?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} >
//             Cancel
//           </Button>
//           <Button onClick={open} color="error" autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>

//                     </Button>
//                   </Box>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Product;



// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   CircularProgress,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import API from "../../api/api";

// const Product = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [productList, setProductList] = useState([]);
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await API.get("/products");
//         console.log(response);
//         setProductList(response?.data);


    
//       } catch (error) {
//         console.log(error);
//         alert(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);


//   const handleOpenDialog = () => setOpenDialog(true);
//   const handleCloseDialog = () => setOpenDialog(false);

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Product List
//       </Typography>
//       {!isLoading ? (
//         <TableContainer component={Paper} elevation={3}>
//           <Table>
//             <TableHead sx={{ bgcolor: "#f0f0f0" }}>
//               <TableRow>
//                 <TableCell>
//                   <strong>ID</strong>
//                 </TableCell>
//                 <TableCell>
//                   <strong>Title</strong>
//                 </TableCell>
//                 <TableCell>
//                   <strong>Body</strong>
//                 </TableCell>
//                 <TableCell>
//                   <strong>Actions</strong>
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {productList?.map((value) => (
//                 <TableRow key={value.id}>
//                   <TableCell>{value.id}</TableCell>
//                   <TableCell>{value.title}</TableCell>
//                   <TableCell>{value.body}</TableCell>
//                   <TableCell>
//                     <Button onClick={() => navigate(`/admin/edit/${value.id}`)}>
//                       {<EditIcon />}
//                     </Button>
//                     <Button onClick={handleOpenDialog}>{<DeleteIcon />}</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <Box>
//           <CircularProgress />
//         </Box>
//       )}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this product?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Cancel</Button>
//           <Button onClick={handleCloseDialog} autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };
// export default Product;




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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import API from "../../api/api"; 

const Product = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteid, setDeleteid] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await API.get("/products");
        console.log("API response:", response);
setProductList(response?.data)
        // const products = response?.data;


     
      } catch (error) {
        console.error("Error fetching products:", error);
        alert(error.message);
        setProductList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


   const handledelete = async () => {
    if (deleteid) {
      try {
        const response = await API.delete(`/products/${deleteid}`);
        console.log(response);
      } catch (error) {
        console.log("product dlt", error);
      }
    }
  };


  //  useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await API.get("/products");
  //       console.log(response);
  //       setProductList(response?.data);
  //     } catch (error) {
  //       console.log(error);
  //       alert(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);



  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Product List
      </Typography>

      {!isLoading ? (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ bgcolor: "#f0f0f0" }}>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productList?.map((value) => (
                <TableRow key={value.id}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.title}</TableCell>
                  <TableCell>{value.body}</TableCell>
                  <TableCell>
                    <Button onClick={() => navigate(`/admin/edit/${value.id}`)}>
                      <EditIcon />
                    </Button>
                  <Button
                      onClick={() => {
                        setOpenDialog(true);
                        setDeleteid(value.id);
                      }}
                    >
                      {<DeleteIcon />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          
          <Button
            onClick={() => {
              handledelete();
              handleCloseDialog();
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Product;
