import { Box } from "@mui/material";

const Home =() =>{
    return(
        <Box sx={{     display: "flex",
            justifyContent: "center",
            alignItems: "center" }}>
        <div className="home-container">
        <h1 className="welcome-message">Welcome to the Employee Management System</h1>
        <p className="description">We're glad to have you here! </p>
        </div>
        </Box>

  
    )
};
export default Home;