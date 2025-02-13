import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useTheme } from "@mui/material/styles";
import {
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
} from "../Services/EmployeeService";
import { toast, ToastContainer } from "react-toastify";

const EmployeeTable = forwardRef(({ employee, noData }, ref) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [employeeToEdit, setEmployeeToEdit] = useState();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (employee) {
      setEmployees([employee]);
      setLoading(false);
    } else {
      fetchEmployees();
    }
  }, [employee]);

  useImperativeHandle(ref, () => ({
    fetchEmployees,
  }));

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await getAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (employee) => {
    setEmployeeToDelete(employee);
    setOpenDelete(true);
  };

  const handleEditClick = (employee) => {
    setEmployeeToEdit(employee);
    setOpenEdit(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setEmployeeToDelete(null);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setEmployeeToEdit(null);
  };

  const handleConfirmDelete = async () => {
    if (employeeToDelete) {
      try {
        const res = await deleteEmployee(employeeToDelete.empID);
        console.log("employee deletion response"+res);
        if(res.code ==="00"){
                    toast.success('Employee Deleted successfully', {
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
        fetchEmployees(); // Refresh the employee list
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
    handleCloseDelete();
  };

  const handleSaveEdit = async () => {
    if (employeeToEdit) {
      try {
       const res =  await updateEmployee(employeeToEdit);
       if(res.code === "00"){
                  toast.success('Employee updated successfully', {
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
        fetchEmployees(); // Refresh the employee list
      } catch (error) {
        console.error("Error updating employee:", error);
      }
    }
    handleCloseEdit();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEmployeeToEdit((prev) => ({ ...prev, [name]: value }));
  };

  const columns = [
    { id: "empID", label: "Employee ID", minWidth: 100 },
    { id: "firstName", label: "First Name", minWidth: 100, align: "left" },
    { id: "lastName", label: "Last Name", minWidth: 100, align: "left" },
    { id: "email", label: "Email", minWidth: 100, align: "left" },
    { id: "salary", label: "Salary", minWidth: 100, align: "center" },
    { id: "actions", label: "Actions", minWidth: 100, align: "center" },
  ];

  return (
    <>
        <Box sx={{ p: 8 }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : noData ? (
        <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
          No employee found with the given ID
        </Typography>
      ) : employees.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
          No relevant data
        </Typography>
      ) : (
        <>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, color: "#001EB9" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employees
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((employee) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={employee.empID}
                    >
                      {columns.map((column) => {
                        const value = employee[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={
                              column.id === "empID" ? { color: "#969191" } : {}
                            }
                          >
                            {column.id === "actions" ? (
                              <div>
                                <Button
                                  variant="contained"
                                  size="small"
                                  style={{
                                    marginRight: "8px",
                                    backgroundColor: "primary",
                                    "&:hover": { backgroundColor: "darkred" },
                                  }}
                                  onClick={() => handleEditClick(employee)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="contained"
                                  size="small"
                                  onClick={() => handleDeleteClick(employee)}
                                  sx={{
                                    marginRight: "8px",
                                    backgroundColor: theme.palette.error.main,
                                    "&:hover": {
                                      backgroundColor: theme.palette.error.dark,
                                    },
                                  }}
                                >
                                  Delete
                                </Button>
                              </div>
                            ) : (
                              value || ""
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}

      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
          {/* <img src={AlertIcon} alt="Alert" style={{ cursor: 'pointer', height: '50px', width: '50px' }} /> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "800",
              color: "#162427",
              letterSpacing: "0.1em",
            }}
          >
            ARE YOU SURE?
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              textAlign: "center",
              fontSize: "14px",
              marginTop: 10,
              color: "#162427",
              fontWeight: "700",
            }}
          >
            You will not be able to undo this employee deletion if you proceed!
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center", marginBottom: 15 }}>
          <Button
            onClick={handleCloseDelete}
            style={{
              color: "black",
              border: "2px solid #001EB9",
              marginRight: 10,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            style={{
              backgroundColor: theme.palette.error.main,
              color: "white",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Employee</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="First Name"
            type="text"
            fullWidth
            name="firstName"
            value={employeeToEdit?.firstName || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            fullWidth
            name="lastName"
            value={employeeToEdit?.lastName || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={employeeToEdit?.email || ""}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Salary"
            type="number"
            fullWidth
            name="salary"
            value={employeeToEdit?.salary || ""}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
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
});

export default EmployeeTable;
