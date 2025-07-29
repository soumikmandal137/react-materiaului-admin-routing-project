import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

const categories = ["Electronics", "Furniture", "Accessories", "Books"];

const Addproduct = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", form);

    // Clear form
    setForm({ name: "", category: "", price: "" });

    // You can redirect or show a success message here
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Add New Product
      </Typography>

      <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Product Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <TextField
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            select
            fullWidth
            required
            margin="normal"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            fullWidth
            required
            margin="normal"
            // inputProps={{ min: 0 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Product
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Addproduct;
