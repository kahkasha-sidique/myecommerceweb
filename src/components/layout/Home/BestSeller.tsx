"use client"



import { AllProduct } from '@/data/product'
import { Box,  Button,  Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function BestSeller() {

        const bestSeller=AllProduct.filter((item)=>item.seller=="Best Seller")
  return (
    <Box sx={{ background: "#fbf8f2", color: "white", py: 5 ,px:{lg:5, md:6, xs:3} ,minHeight:{lg:"100vh",xs:"240vh"},textAlign:"center"}}>
        <Container maxWidth={false} disableGutters>
       <Typography sx={{textAlign:"center",color:"#423c39",fontSize:{md:"40px",xs:"25px"},fontFamily:"serif"}}>OUR BEST SELLERS</Typography>
       <Typography sx={{textAlign:"center",color:"#423c39",fontSize:"20px",fontFamily:"sans-serif"}}>Don't Miss Out</Typography>
      <Box sx={{py:5,display:"grid",gridTemplateColumns:{md:"1fr 1fr 1fr",xs:"1fr",sm:"1fr 1fr"},px:5}}>
        {bestSeller.map((item,i)=>(
  <Box key={i} sx={{ position: "relative" ,overflow:"hidden",    "& img": {
      transition: "transform 0.4s ease"
    },

    "&:hover img": {
      transform: "scale(0.95)"
    }}}>

    <Image
      src={`/images/${item.image}`}
      alt="best seller"
      width={430}
      height={550}
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
        borderRadius: "0px",
        cursor:"pointer"
      }}
    >
    {item.seller}
    </Box>

    <Typography sx={{ mt:1, color:"#423c39",textAlign:"left",pl:1 }}>
      {item.name}
    </Typography>

    <Typography sx={{ color:"#423c39",textAlign:"left",pl:1 }}>
      {item.Price}
    </Typography>

  </Box>
))}
      </Box>
        <Button
              
              sx={{
                mt: 2,
                background: "#423c39",
                color: "white",
                py:1.5,
                 px: 6,
                 borderRadius:"0px" 
              }}
            >
              Shop Best Sellers
            </Button>
        </Container>
    </Box>
    
  )
}
