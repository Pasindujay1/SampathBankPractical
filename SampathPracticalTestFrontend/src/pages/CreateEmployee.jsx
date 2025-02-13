import { Box, Grid2, Typography } from "@mui/material";
import CreateEmployeeForm from "../components/CreateEmployee";

const CreateEmployee = () => {
  return (
    <CreateEmployeeForm/>

    // <Box sx={{ p: 8 }}>
    //   <Grid2 container spacing={2} sx={{ mb: 4 }}>
    //     <Grid2 item xs={12}>
    //       <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    //         <Typography
    //           variant="h4"
    //           sx={{ fontWeight: 700, mr: 2, letterSpacing: "0.1em" }}
    //         >
    //           Create Employee
    //         </Typography>
    //       </Box>
    //     </Grid2>
    //     <Grid2 item xs={12} md={10} lg={11}>
    //         <CreateEmployeeForm/>
    //     </Grid2>

    //   </Grid2>
    // </Box>
  );
};

export default CreateEmployee;
