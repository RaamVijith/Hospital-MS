import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          L O G O
        </Typography>

        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
          <NotificationsIcon sx={{fontSize:35}}/>
        </IconButton >

        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
          <SettingsIcon sx={{fontSize:35}}/>
        </IconButton>

        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
          <AccountCircleIcon sx={{fontSize:35}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
