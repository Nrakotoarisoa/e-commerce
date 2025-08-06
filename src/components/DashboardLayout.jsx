import { Box } from '@mui/material';
import Sidebar from './SidebarLayout';
import PrimarySearchAppBar from './AppBar';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <PrimarySearchAppBar />
        <Sidebar />
        <Box fullWidth component="main" sx={{ flexGrow: 1, p: 3,marginTop: '64px'}}>
            {children}
        </Box>
    </Box>
  );
};

export default DashboardLayout;
