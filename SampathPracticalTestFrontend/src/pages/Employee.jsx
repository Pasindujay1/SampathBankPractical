import { Box, Grid2, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";

const Employee = () => {
  const [employee, setEmployee] = useState(null);
  const [noData, setNoData] = useState(false);
  const employeeTableRef = useRef();

  const refreshEmployeeList = () => {
    if (employeeTableRef.current) {
      employeeTableRef.current.fetchEmployees();
    }
  };

  return (
    <Box sx={{ p: 8 }}>
      <Grid2 container spacing={2} sx={{ mb: 4 }}>
        <Grid2 item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mr: 2, letterSpacing: '0.1em' }}>
              Employees
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
      {/* <Grid2 container spacing={2} > */}
        <Grid2 item xs={12} md ={10} lg={10} >
          <SearchBar setEmployee={setEmployee} setNoData={setNoData} refreshEmployeeList={refreshEmployeeList} />
        </Grid2>
      {/* </Grid2> */}
      <Grid2 item xs={12} md={10} lg={11}>
        <EmployeeTable ref={employeeTableRef} employee={employee} noData={noData} />
      </Grid2>
    </Box>
  );
};

export default Employee;