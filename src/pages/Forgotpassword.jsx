import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Paper
} from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle forgot password logic
    console.log('Reset link sent to:', email);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={2}>
          Enter your email address and we'll send you a link to reset your password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Send Reset Link
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
