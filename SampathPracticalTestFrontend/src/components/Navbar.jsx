// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const handleLogout = () => {
//         // Handle logout logic here (e.g., clear user session)
//         console.log("User logged out");
//     };

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/table1">Table 1</Link>
//                 </li>
//                 <li>
//                     <Link to="/table2">Table 2</Link>
//                 </li>
//                 <li>
//                     <button onClick={handleLogout}>Logout</button>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from "react";
import { AppBar, Stack, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Mui Navbar
          </Typography>
          <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Table 1</Button>
          <Button color="inherit">Table 2</Button>
        </Stack>
        </Toolbar>
     
      </AppBar>
    </div>
  );
};

export default Navbar;
