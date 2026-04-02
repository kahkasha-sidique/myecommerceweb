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
import { TextField } from '@mui/material';
import { AllProduct } from '@/data/product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const pages = [
  { label: "Shop", url: "/Shop" },
  { label: "Sale", url: "/Sale" },
  { label: "Customer Care", url: "/Customer" },
  {label :"Stores",url:"/Store"},   
  
];


function Nav() {
  const Navigate=useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const[open,setOpen]=React.useState<Boolean>(false)
  const[value,setValue]=React.useState("")
  const[filterProduct,setFilterProduct]=React.useState(AllProduct.filter((item)=>item.seller==="Sale" || item.seller==="Best Seller"))

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

const searchPage=()=>{
setOpen(true)
}

const closePage=()=>{
  setOpen(false)
}

const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
const val=e.target.value
setValue(val)
if(val===""){
  setFilterProduct(AllProduct.filter((item)=>item.seller==="Sale" || item.seller==="Best Seller"))
}
else{
  const filter=AllProduct.filter((item)=>item.name.toLowerCase().includes(val.toLowerCase())||item.seller?.toLowerCase().includes(val.toLowerCase()))
  setFilterProduct(filter)
}
}

const LogIn=()=>{
  Navigate.push("/Log")
}
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

<SearchOutlined onClick={searchPage} sx={{cursor:"pointer"}}/>


{open && (
  <Box className="fixed bg-white top-0 left-0 w-full z-50 px-20 py-6 max-h-[100vh] overflow-y-auto flex flex-col gap-6">
    
   
    <Box className="flex flex-row items-center gap-4 mb-5">
      <TextField
      value={value}
        placeholder="Search"
        type="text"
        fullWidth
        InputProps={{
          sx: {
            borderRadius: 0,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
          },
        }}
      onChange={handleChange}
      />
      <Button
        sx={{ color: "black", borderRadius: 0 }}
        onClick={closePage}
      >
        Close
      </Button>
    </Box>

    
    <Box className="flex flex-col items-start gap-1">
      <Typography sx={{  fontSize:"23px",fontFamily:"serif" }}>TRENDING PRODUCTS</Typography>

      <Box
        sx={{
          py: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 6, 
          px: 0,
        }}
      >
        {filterProduct.map((item, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              overflow: "hidden",
              "& img": {
                transition: "transform 0.4s ease",
              },
              "&:hover img": {
                transform: "scale(0.95)",
              },
            }}
          >
            <Image
              src={`/images/product/${item.image}`}
              alt="best seller"
              width={300}
              height={400}
            />

            <Box
              sx={{
                position: "absolute",
                top: 30,
                left: 30,
                background: "#9ec7cf",
                color: "#2c2c2c",
                px: 2,
                py: 0.5,
                fontSize: "14px",
                borderRadius: 0,
                cursor: "pointer",
              }}
            >
              {item.seller}
            </Box>

            <Typography sx={{ mt: 1, color: "#423c39", textAlign: "left", pl: 1 }}>
              {item.name}
            </Typography>
            <Typography sx={{ color: "#423c39", textAlign: "left", pl: 1 }}>
              {item.Price}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
)}
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


  <Box sx={{ display: "flex", alignItems: "center", gap: 1,cursor:"pointer" }} >
   <AccountCircleOutlined sx={{fontSize:"30px"}} onClick={LogIn}/>
  
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
