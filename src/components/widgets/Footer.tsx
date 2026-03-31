"use client"

import { FacebookOutlined, Instagram, LinkedIn, Pinterest, Twitter, } from "@mui/icons-material";
import { Box, Container, Typography, TextField, Button, Checkbox } from "@mui/material";
import Link from "next/link";

export default function Footer() {


  return (
    <Box sx={{ background: "#423c39", color: "white", py: 6 ,px:{lg:5, md:6, xs:3} }}>
      <Container maxWidth={false} disableGutters>

        
        <Typography sx={{ fontSize: {md:"42px",xs:"30px"}, mb: {md:6,xs:2} }}>
          COLLECTION
        </Typography>

        
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 6
          }}
        >

          
          <Box sx={{ minWidth: "250px" }}>
            <Typography sx={{ fontWeight: 600, mb: 2,fontSize:"20px" }}>
              OUR STORE
            </Typography>

            <Typography>Shop</Typography>
            <Typography>Sale</Typography>
            <Typography>Customer Care</Typography>
            <Typography>Stores</Typography>

            <Typography sx={{ mt: 8, fontWeight: 600 ,fontSize:"20px"}}>
              NEED ASSISTANCE?
            </Typography>

            <Typography>123-456-7890</Typography>
            <Typography>sk@gmail.com</Typography>
          </Box>

          
          <Box sx={{ minWidth: "250px" }}>
            <Typography sx={{ fontWeight: 600, mb: 2 ,fontSize:"20px"}}>
              TERMS & CONDITIONS
            </Typography>

            <Link href="/Terms"><Typography sx={{textDecoration:"underline",color:"white"}} >Terms & Conditions</Typography></Link>
           <Link href="/Privacy"> <Typography sx={{textDecoration:"underline",color:"white"}}>Privacy Policy</Typography></Link>
            <Link href="/Shipping"><Typography sx={{textDecoration:"underline",color:"white"}}>Shipping Policy</Typography></Link>
           <Link href="/Refund"><Typography sx={{textDecoration:"underline",color:"white"}}>Refund Policy</Typography></Link>
            <Link href="/Accessibility"><Typography sx={{textDecoration:"underline",color:"white"}}>Accessibility Statement</Typography></Link>

              <Typography sx={{ mt: 5, fontWeight: 600 ,fontSize:"20px"}}>
              STAY CONNECTED
            </Typography>
            <Box sx={{display:"flex",gap:1}}>
            <FacebookOutlined sx={{cursor:"pointer"}}/>
            <Twitter sx={{cursor:"pointer"}}/>
            <Pinterest sx={{cursor:"pointer"}}/>
            <LinkedIn sx={{cursor:"pointer"}}/>
            <Instagram sx={{cursor:"pointer"}}/>
            </Box>
            
          </Box>

          
          <Box sx={{ minWidth: "250px" }}>
            <Typography sx={{ fontWeight: 600 ,fontSize:"20px"}}>
              BE OUR FRIEND
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Enter Your Email Here *
            </Typography>

            <TextField
              variant="standard"
              fullWidth
              sx={{ mt: 2, input: { color: "white" } }}
            />

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Checkbox sx={{ color: "white" ,"&.Mui-checked":{color:"white",backgroundColor:"#423c39",borderRadius:"4px"}}} />
              <Typography sx={{ fontSize: "14px" }}>
                Yes, subscribe me to your<br/> newsletter.*
              </Typography>
            </Box>

            <Button
              fullWidth
              sx={{
                mt: 2,
                background: "#c7c4c3",
                color: "black",
                borderRadius:"0px"
              }}
            >
              Subscribe Now
            </Button>
          </Box>

        </Box>

      
        <Typography sx={{ textAlign: "center", mt: 8 }}>
          © 2024 by COLLECTION. Powered and secured by Wix
        </Typography>

      </Container>
    </Box>
  );
}