import { Box } from '@mui/material';
import Sidebar from './SidebarLayout';
import PrimarySearchAppBar from './AppBar';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <PrimarySearchAppBar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3,marginTop: '64px', width: `calc(100% - ${240}px)` }}>
            {children}
        </Box>
    </Box>
  );
};

export default DashboardLayout;
