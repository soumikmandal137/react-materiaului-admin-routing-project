// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Paper,
//   TextField,
//   Typography,
//   MenuItem,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const categories = ["Electronics", "Furniture", "Accessories", "Books"];

// const Addproduct = () => {
//   const { id } = useParams();
//   console.log("product id", id);

//   const loginData = JSON.parse(localStorage.getItem("loginData"));
//   // console.log("data",loginData);

//   const userId = loginData.userId;
//   const [form, setForm] = useState({
//     id: Math.random(),
//     userId: userId,
//     title: "",
//     category: "",
//     price: "",
//     body: "",
//   });

// const validate = () => {
//     const newError = {};
// }

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleeditSubmit = (e) => {
//     e.preventDefault();
//     console.log("Product added:", form);
//     if (validate()) {
//       alert("product add successfully");

//       // Clear form
//       setForm({
//         id: Math.random(),
//         userId: "",
//         title: "",
//         category: "",
//         price: "",
//         body: "",
//       });
//     } else {
//       alert("please fix error");
//     }

//     // You can redirect or show a success message here
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("Product added:", form);
//     console.log("this is for edit");

//     alert("please fix error");

//     if (validate()) {
//       alert("product add successfully");
//       try {
//       const  response= await  axios.product("https://dummyjson.com/products", form)
//       console.log("response",response);

//           // .then((response) => {
//           //   console.log(response.data);
//           // })
//           // .catch((error) => {
//           //   alert("error message");
//           // });

//         // Clear form
//         setForm({
//           name: "",
//           category: "",
//           price: "",
//           body:"",
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     //  else {
//     //   alert("please fix error");
//     // }

//     // You can redirect or show a success message here
//   };

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         {id ? "Edit Product" : "Add New Product"}
//       </Typography>

//       <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
//         <form>
//           <TextField
//             label="Product Name"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//           />

//           <TextField
//             label="Category"
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//             select
//             fullWidth
//             required
//             margin="normal"
//           >
//             {categories.map((cat) => (
//               <MenuItem key={cat} value={cat}>
//                 {cat}
//               </MenuItem>
//             ))}
//           </TextField>

//           <TextField
//             label="Price"
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             type="number"
//             fullWidth
//             required
//             margin="normal"
//             // inputProps={{ min: 0 }}
//           />

//         <TextField
//             label="Body"
//             name="body"
//             value={form.body}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//             onClick={id ? handleeditSubmit : handleSubmit}
//           >
//             {id ? "Update " : "save"}
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default Addproduct;

import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../../api/api"

const schema = yup.object().shape({
  title: yup.string().required("Product Name is required"),
  body: yup.string().required("Description is required"),
});

const categories = ["Electronics", "Furniture", "Accessories", "Books"];

const Addproduct = () => {
  const { id } = useParams();
  console.log("item id", id);

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  // console.log("data", loginData);

  const userId = loginData.userId;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [form, setForm] = useState({
    id: Math.random(),
    userId: userId,
    title: "",
    category: "",
    price: "",
    body: "",
  });

    const handleformSubmit = async (data) => {
      if (id) {
        try {
          const response = await API.put(`/products/${id}`, data);
          console.log("response", response);
          // Reset form after successful submission

          reset();
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await API.post("/products", data);
          console.log("response", response);
          // Reset form after successful submission
          reset();
        } catch (error) {
          console.error(error);
        }
      }
    };
  

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("This is called edit");

    // if (validate()) {
    //   console.log("Product added:", form);
    //   alert("Product added successfully!");

    //   // Clear form
    //   setForm({
    //     name: "",
    //     category: "",
    //     price: "",
    //     description: "",
    //   });
    // } else {
    //   alert("Please fix the errors before submitting.");
    // }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {id ? "Edit Product" : "Add New Product"}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
        <form onSubmit={handleSubmit(handleformSubmit)}>
          <TextField
            label="Product Name"
            name="title"
            fullWidth
            required
            margin="normal"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="Category"
            select
            fullWidth
            margin="normal"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Price"
            type="number"
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                min: 0,
              },
            }}
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <TextField
            label="Description"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            {...register("body")}
            error={!!errors.body}
            helperText={errors.body?.message}
          />

          {/* <TextField
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            select
            fullWidth
            required
            margin="normal"
            error={!!error.category}
            helperText={error.category}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField> */}

          {/* <TextField
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            fullWidth
            required
            margin="normal"
            inputProps={{ min: 0 }}
            error={!!error.price}
            helperText={error.price}
          /> */}

          {/* <TextField
            label="Description"
            name="body"
            value={form.body}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            multiline
            rows={3}
            error={!!error.body}
            helperText={error.body}
          /> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            // onClick={id ? handleEditSubmit : handleSubmit}
          >
            {id ? "Update" : "Save"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Addproduct;
