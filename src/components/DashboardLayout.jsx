import { Box } from '@mui/material';
import Sidebar from './SidebarLayout';
import PrimarySearchAppBar from './AppBar';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ height: '100vh' }}>
        <PrimarySearchAppBar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 0, marginTop: 8, marginLeft: 30 }}>
            {children} 
        </Box>
    </Box>
  );
};

export default DashboardLayout;
