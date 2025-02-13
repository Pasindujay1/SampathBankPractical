import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { createEmployee } from "../Services/EmployeeService";
  import { toast, ToastContainer } from "react-toastify";
  
  const CreateEmployeeForm = () => {
    const [employee, setNewEmployee] = useState({
      empID: '00',
      firstName: "",
      lastName: "",
      email: "",
      salary: "",
    });
  
    const handleCreateChange = (e) => {
      const { name, value } = e.target;
      setNewEmployee((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleCreateEmployee = async (e) => {
      e.preventDefault();
      try {
        const res = await createEmployee(employee);
        if (res.code === "00") {
          toast.success('Employee created successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setNewEmployee({
            empID: '00',
            firstName: "",
            lastName: "",
            email: "",
            salary: "",
          });
        }
        console.log("Employee Creation Response", res);
      } catch (e) {
        console.error("Error creating employee", e);
        toast.error('Error in creating a new employee', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
  
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f2f5",
          }}
        >
          <Card
            sx={{
              minWidth: 300,
              maxWidth: 400,
              padding: 3,
              boxShadow: 3,
              backgroundColor: "#f0f2f5",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center", marginBottom: 2 }}
              >
                Create a new Employee
              </Typography>
              <form onSubmit={handleCreateEmployee}>
                <TextField
                  label="First Name"
                  type="text"
                  fullWidth
                  required
                  name="firstName"
                  value={employee.firstName}
                  onChange={handleCreateChange}
                  sx={{ marginBottom: 2 }}
                />
  
                <TextField
                  label="Last Name"
                  type="text"
                  fullWidth
                  required
                  name="lastName"
                  value={employee.lastName}
                  onChange={handleCreateChange}
                  sx={{ marginBottom: 2 }}
                />
  
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  name="email"
                  value={employee.email}
                  onChange={handleCreateChange}
                  sx={{ marginBottom: 2 }}
                />
  
                <TextField
                  label="Salary"
                  type="number"
                  fullWidth
                  required
                  name="salary"
                  value={employee.salary}
                  onChange={handleCreateChange}
                  sx={{ marginBottom: 2 }}
                />
  
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                >
                  Create Employee
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  };
  
  export default CreateEmployeeForm;