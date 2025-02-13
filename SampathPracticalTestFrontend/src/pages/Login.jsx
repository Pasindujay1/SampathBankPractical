import { Box, Card, CardContent, Typography, TextField, Button, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password") {
      navigate("/home");
      console.log("Login Success");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card sx={{ minWidth: 300, maxWidth: 400, padding: 3, boxShadow: 3, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginBottom: 2 }}>
              Login
            </Button>
          </form>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Don't have an account?{" "}
            <Link href="/register" sx={{ color: '#001EB9' }}>
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;