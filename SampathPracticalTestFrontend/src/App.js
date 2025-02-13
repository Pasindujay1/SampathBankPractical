
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar2 from './components/Navbar2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Employee from './pages/Employee';
import CreateEmployee from './pages/CreateEmployee';
import Footer from './components/Footer';


const theme = createTheme({
  palette: {
    primary: {
      main: '#001EB9',
    },

  },
 
  typography:{
    fontFamily: 'Satoshi',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar2 />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/register" element={<Register />} />

            ` <Route path="/login" element={<Login />} />`
              <Route path="/home" element={<Home />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/createEmployee" element={<CreateEmployee />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
