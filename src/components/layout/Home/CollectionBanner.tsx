"use client"

import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function CollectionBanner() {
  
  const navigation=useRouter()

  const Collection=()=>{
   navigation.push("/Shop")
  }
  return (
    <Box sx={{position:"relative"}}>
    <Image
    src={"/images/collectionbanner.jpeg"}
    alt="banner"
    width={1200}
    height={280}
     className="w-full h-100 sm:h-60 md:h-160 lg:h-200 object-cover"
  priority
  />
  <Box sx={{position:"absolute" ,top:"65%",textAlign:"center",left:"7%",transform: "translateY(-30%)"}}>
  <Typography sx={{fontSize:{md:"53px",xs:"30px"},color:"#423c39",fontFamily:"serif"}}>NEW</Typography>
  <Typography sx={{fontSize:{md:"53px",xs:"30px"},color:"#423c39",fontFamily:"serif"}}>COLLECTION</Typography>
     <Button
         
              sx={{
                 padding: { xs: "6px 12px", md: "10px 50px" },
                mt: 2,
                background: "#423c39",
                color: "white",
                py:1.5,
                 px: 6,
                 borderRadius:"0px" ,"&:hover":{background:"white",color:"#423c39"}}}
                 onClick={Collection}
            >
              Shop Now
            </Button>
         
  </Box>
  
    </Box>
  )
}
