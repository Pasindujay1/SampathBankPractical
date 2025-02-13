// filepath: /c:/Users/Pasindu Jayasinghe/Downloads/Sampath_Project/SampathPracticalTestFrontend/src/components/Footer.jsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: '#001EB9' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              © 2023 Sampath EMS. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/privacy-policy" color="inherit" sx={{ mx: 2 }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" color="inherit" sx={{ mx: 2 }}>
              Terms of Service
            </Link>
            <Link href="/contact-us" color="inherit" sx={{ mx: 2 }}>
              Contact Us
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;