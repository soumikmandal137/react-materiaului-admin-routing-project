import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // State for form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for errors
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate input fields
  const validate = () => {
    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newError.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newError.password = "Password is required";
    } else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    setError(newError);
    console.log("Validation errors:", newError);
    return Object.keys(newError).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
       console.log("formdata",formData);
       localStorage.setItem("SignUpData",JSON.stringify(formData))
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert("Please fix the errors before submitting.");
    }

   
    
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f9f9"
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            fullWidth
            required
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={!!error.name}
            helperText={error.name}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            required
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            required
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={!!error.password}
            helperText={error.password}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
