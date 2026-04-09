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

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { AccountCircleOutlined, Close, Delete, Favorite, Lock, SearchOutlined, Sell, ShoppingBagOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { Divider, TextField } from '@mui/material';
import { AllProduct } from '@/data/product';
import Image from 'next/image';

import { useCartStore } from '@/store/cartStore';



const pages = [
  { label: "Shop", url: "/Shop" },
  { label: "Sale", url: "/Sale" },
  { label: "Customer Care", url: "/Customer" },
  {label :"Stores",url:"/Store"},   
  
];


function Nav() {
 
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const[open,setOpen]=React.useState<Boolean>(false)
  const[cartOpen,setCartOpen]=React.useState<Boolean>(false)
  const[value,setValue]=React.useState("")
  const[codeOpen,setCodeOpen]=React.useState(false)
  const[filterProduct,setFilterProduct]=React.useState(AllProduct.filter((item)=>item.seller==="Sale" || item.seller==="Best Seller"))
  const cart=useCartStore((state)=>state.cart)
  const handleDelete=useCartStore((state)=>state.handleDelete)
  const incrementAdd=useCartStore((state)=>state.incrementAdd)
  const decrementSub=useCartStore((state)=>state.decrementSub)

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

const cartPage=()=>{
setCartOpen(true)
}

const closeCartPage=()=>{
setCartOpen(false)
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

const total=cart.reduce((acc,item)=>acc+item.Price*item.quantity,0)


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
   <Link href="/LogIn"><AccountCircleOutlined sx={{fontSize:"30px",color:"#423c39"}} /></Link>
  
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
   <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <IconButton sx={{ p: 0 }}>
      <Favorite sx={{ color: "white" }} />

      <Box sx={{ position: "relative", ml: { md: 1, xs: 0 } }}>
        <ShoppingBagOutlined sx={{ color: "white", fontSize: "38px" }} onClick={cartPage} />
        
        
{cartOpen && (
 <Box className="fixed bg-white top-0 right-0 w-full sm:w-[80vw] md:w-[40vw] lg:w-[30vw] z-50 px-4 sm:px-6 md:px-10 py-5 h-full overflow-y-auto flex flex-col gap-6">


  <Box className="flex justify-between items-center">
    <p className="text-sm sm:text-base md:text-lg">
      <span className="text-lg sm:text-xl md:text-2xl font-medium">Cart</span> ({cart.length} items)
    </p>
    <Button sx={{ color: "black", borderRadius: 0 }} onClick={closeCartPage}>
      <Close />
    </Button>
  </Box>

  <Divider />


  {cart.length === 0 ? (
    <p className="text-center text-base sm:text-lg py-20">Your cart is empty</p>
  ) : (
    <div className="flex flex-col gap-4">

     
      <div className="flex flex-col gap-4 max-h-[45vh] overflow-y-auto">
        {cart.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 border-b border-gray-300 pb-4 flex-row"
          >
          
            <img
              src={`/images/product/${item.image}`}
              className="h-16 w-16 sm:h-20 sm:w-20 object-cover"
            />

       
            <div className="flex flex-col flex-1">
              <p className="text-sm">{item.name}</p>
              <p className="text-sm mt-1">${item.Price}</p>
              <p className="text-xs mt-1">Color: {item.color}</p>
              <p className="text-xs">Size: {item.size}</p>


              <div className="flex justify-between items-center mt-2">
                <Button
                  sx={{
                    background: "#f5f2f2",
                    color: "#423c39",
                    minWidth: "90px",
                    borderRadius: "0px",
                    border: "1px solid #423c39",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Typography onClick={() => decrementSub(item.quantity, item.id, item.size)}>-</Typography>
                  <Typography>{item.quantity}</Typography>
                  <Typography onClick={() => incrementAdd(item.quantity, item.id, item.size)}>+</Typography>
                </Button>

                <p className="text-sm font-medium">
                  ${Number(item.Price) * Number(item.quantity)}
                </p>
              </div>
            </div>

           
            <Delete
              className="cursor-pointer"
              onClick={() => handleDelete(item.id, item.size)}
            />
          </div>
        ))}
      </div>

  
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => setCodeOpen((prev) => !prev)}
      >
        <p className="text-base flex items-center gap-2">
          <Sell sx={{ fontSize: "18px" }} />
          Enter a promo code
        </p>

        {codeOpen && (
          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
            <TextField
              placeholder="e.g., SAVE50"
              size="small"
              fullWidth
            />
            <Button
              variant="contained"
              sx={{
                background: "#423c39",
                height: "40px",
                px: 4,
              }}
            >
              Apply
            </Button>
          </div>
        )}
      </div>


      <div className="flex flex-col gap-3 pt-4">
        <Divider />

        <div className="flex justify-between">
          <p className="text-base sm:text-lg">Estimated total</p>
          <p className="text-base sm:text-lg font-medium">
            ${total.toFixed(2)}
          </p>
        </div>

        <p className="text-xs sm:text-sm">
          Taxes and shipping are calculated at checkout.
        </p>


        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            background: "#423c39",
            boxShadow: "none",
            py: 1,
            textTransform: "capitalize",
            width: "100%",
          }}
        >
          Checkout
        </Button>

        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            background: "#423c39",
            boxShadow: "none",
            py: 1,
            textTransform: "capitalize",
            width: "100%",
          }}
        >
          View Cart
        </Button>

        <p className="text-xs sm:text-sm text-center">
          <Lock sx={{ fontSize: "16px" }} /> Secure Checkout
        </p>
      </div>
    </div>
  )}
</Box>
)}
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
          }}
           onClick={cartPage} 
        >
          {cart.length}
        </Box>
      </Box>
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
