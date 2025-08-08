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

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Paper,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../../api/api";

// const schema = yup.object().shape({
//   title: yup.string().required("Product Name is required"),
//   body: yup.string().required("Description is required"),
// });

const categories = [
  // { id: "", name: "-- Select Category --" },
  { id: "electronics", name: "Electronics" },
  { id: "Furniture", name: "Furniture" },
  { id: "Assessories", name: "Assessories" },
  { id: "books", name: "Books" },
];

const schema = yup.object().shape({
  title: yup.string().required("Product name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
  category: yup.string().required("Category is required"),
  body: yup
    .string()
    .min(3, "Description must be at least 3 characters")
    .required("Description is required"),
});





const Addproduct = () => {
 const { id } = useParams();
   const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchIdData = async () => {
      setLoading(true);
      try {
        const response = await API.get(`/products/${id}`);
        // console.log(response);
        setEditData(response?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchIdData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      price: "",
      category: "",
      body: "",
    },
  });

  useEffect(() => {
    if (id) {
      const fetchIdData = async () => {
        setLoading(true);
        try {
          const response = await API.get(`/products/${id}`);
          setEditData(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchIdData();
    }
  }, [id]);

  useEffect(() => {
    if (editData && Object.keys(editData).length > 0) {
      Object.keys(editData).forEach((key) => {
        console.log(key, editData[key]);
        setValue(key, editData[key]);
      });
    }
  }, [editData, setValue]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await API.put(`/products/${id}`, data);
        alert("Product updated successfully!");
      } else {
        await API.post("/products", data);
        alert("Product added successfully!");
        reset(); // clear form
        navigate("/admin/list");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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


  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        {id ? "Edit Product" : "Add New Product"}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            // label="Product Name"
            {...register("title")}
            margin="normal"
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            fullWidth
            // label="Price"
            {...register("price")}
            type="number"
            margin="normal"
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category?.message}
              value={watch("category")}
            >
              <MenuItem>----select Category----</MenuItem>
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <TextField
            select
            fullWidth
            // label="Category"
            {...register("category")}
            margin="normal"
            error={!!errors.category}
            helperText={errors.category?.message}
          >
            <MenuItem>----select Category----</MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField> */}

          <TextField
            fullWidth
            // label="Description"
            multiline
            rows={3}
            {...register("body")}
            margin="normal"
            error={!!errors.body}
            helperText={errors.body?.message}
          />

          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            {id ? "UPDATE" : "SAVE"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Addproduct;
