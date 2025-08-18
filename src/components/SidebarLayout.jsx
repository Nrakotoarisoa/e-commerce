import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardIcon, ShoppingCart as ShoppingCartIcon, BarChart as BarChartIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Sidebar = () => {

  const navItems = [
    { text: 'Produits', icon: <DashboardIcon />, path: '/' },
    { text: 'Paniers', icon: <ShoppingCartIcon />, path: '/panier' },
    { text: 'Support', icon: <ContactSupportIcon />, path: '/support' },
    { text: 'FAQ', icon: <BarChartIcon />, path: '/faq' },
  ];

  return (
    <Drawer
      sx={{
          width: 240,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
    >
       <Box sx={{height: 64 + 'px', display: 'flexbox', alignContent: 'center'}}>
          <Typography variant='h4' sx={{display: 'flex', justifyContent: 'center', fontWeight: '600' }}>
                Sellers
          </Typography>
        </Box>
        <Divider />
        <List>
            
            {navItems.map(({ text, icon, path }) => (
            <ListItemButton
                key={text}
                component={NavLink}
                to={path}
                sx={{
                '&.active': {
                    backgroundColor: 'rgba(0,0,0,0.08)',
                },
                }}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            ))}
        </List>
    </Drawer>
  );
};

export default Sidebar;
