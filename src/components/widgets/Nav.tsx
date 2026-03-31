"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { AccountCircleOutlined, Favorite, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import Link from 'next/link';


const pages = [
  { label: "Shop", url: "/Shop" },
  { label: "Sale", url: "/Sale" },
  { label: "Customer Care", url: "/Customer" },
  {label :"Stores",url:"/Store"},   
  
];


function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
      <Box  sx={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1200
    }}>

 <Box
  sx={{
    height: "45px",
    background: "#f5f2f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px:{md:5,xs:2},
    position: "relative",
    color:"black"
  }}
>

<SearchOutlined />


  <Typography
    sx={{
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "14px",
      letterSpacing: "2px",
      color:"black"
    }}
  >
    FREE SHIPPING WORLDWIDE
  </Typography>


  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
   <AccountCircleOutlined sx={{fontSize:"30px"}}/>
    <Typography sx={{ fontSize: "14px" }}>Log In</Typography>
  </Box>
</Box>
    <AppBar position="static" sx={{boxShadow:"none",background:"#423c39"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
    
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page,i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                 <Link  href={page.url}
        style={{ textDecoration: "none", width: "100%" }}> <Typography sx={{ textAlign: 'center',textTransform:"capitalize" ,color:"#423c39"}}>{page.label}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  {pages.map((page, i) => (
    <Link
      key={i}
      href={page.url}
      style={{ textDecoration: "none" }}
    >
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "white",
          display: "block",
          textTransform: "capitalize"
        }}
      >
        {page.label}
      </Button>
    </Link>
  ))}
</Box>
        <Box
  sx={{
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  }}
>

  <Link href="/" style={{textDecoration:"none"}}><Typography sx={{ color: "white",fontSize:"23px",textAlign:"center" }}>
   COLLECTION
  </Typography>
  </Link>
 
</Box>
          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Favorite sx={{color:"white"}}/>
                <ShoppingBagOutlined sx={{color:"white",fontSize:"33px",pl:{md:1,xs:0}}}/>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
     </Box>
  );
}
export default Nav;
