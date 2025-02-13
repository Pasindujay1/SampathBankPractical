import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import { searchEmployee, createEmployee } from '../Services/EmployeeService';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from 'react-toastify';

const SearchBar = ({ setEmployee, setNoData, refreshEmployeeList }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [openCreate, setOpenCreate] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    empID: "00",
    firstName: '',
    lastName: '',
    email: '',
    salary: ''
  });

  const handleSearch = async () => {
    if (query.trim() === '') {
      setEmployee(null);
      setNoData(false);
      return;
    }
    try {
      const employee = await searchEmployee(query);
      if (employee) {
        setEmployee(employee);
        setNoData(false);
      } else {
        setEmployee(null);
        setNoData(true);
      }
    } catch (error) {
      console.error('Error searching employee:', error);
      setEmployee(null);
      setNoData(true);
    }
  };

  const handleClearSearch = () => {
    setQuery('');
    setEmployee(null);
    setNoData(false);
  };

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
    setNewEmployee({
      empID: "00",
      firstName: '',
      lastName: '',
      email: '',
      salary: ''
    });
  };

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateEmployee = async () => {
    if (!newEmployee.firstName || !newEmployee.lastName || !newEmployee.email || !newEmployee.salary) {
      toast.error('All fields are required', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newEmployee.email)) {
      toast.error('Invalid email format', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const res = await createEmployee(newEmployee);
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
      }
      handleCloseCreate();
      refreshEmployeeList(); // Refresh the employee list after creating a new employee
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, paddingRight: 10 }}>
        <FormControl sx={{ width: { xs: '100%', md: '600px' } }}>
          <OutlinedInput
            size="small"
            id="header-search"
            sx={{ borderRadius: '20px', backgroundColor: '#F7F7F7' }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            endAdornment={
              <InputAdornment position="end" sx={{ mr: -0.5 }}>
                {query && (
                  <CloseOutlined
                    onClick={handleClearSearch}
                    style={{ cursor: 'pointer', marginRight: '8px' }}
                  />
                )}
                <Typography
                  onClick={handleSearch}
                  sx={{
                    backgroundColor: '#001EB9',
                    width: '100px',
                    color: 'white',
                    padding: '0 8px',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <SearchOutlined sx={{ mr: 1 }} />
                  Search
                </Typography>
              </InputAdornment>
            }
            aria-describedby="header-search-text"
            inputProps={{
              'aria-label': 'weight'
            }}
            placeholder="Search for employee by ID"
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleOpenCreate}>
          Create New Employee
        </Button>

        <Dialog open={openCreate} onClose={handleCloseCreate} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create New Employee</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                margin="dense"
                label="First Name"
                type="text"
                fullWidth
                name="firstName"
                value={newEmployee.firstName}
                onChange={handleCreateChange}
                required
              />
              <TextField
                margin="dense"
                label="Last Name"
                type="text"
                fullWidth
                name="lastName"
                value={newEmployee.lastName}
                onChange={handleCreateChange}
                required
              />
              <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                name="email"
                value={newEmployee.email}
                onChange={handleCreateChange}
                required
              />
              <TextField
                margin="dense"
                label="Salary"
                type="number"
                fullWidth
                name="salary"
                value={newEmployee.salary}
                onChange={handleCreateChange}
                required
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleCloseCreate} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleCreateEmployee} color="success">
              Create
            </Button>
          </DialogActions>
        </Dialog>
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

export default SearchBar;