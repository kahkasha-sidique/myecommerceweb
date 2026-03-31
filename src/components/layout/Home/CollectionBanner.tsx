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
    style={{
      width: "100%",
      height: "auto"
    }}
  priority
  />
  <Box sx={{position:"absolute" ,top:"65%",textAlign:"center",left:"7%",transform: "translateY(-30%)"}}>
  <Typography sx={{fontSize:"53px",color:"#423c39",fontFamily:"serif"}}>NEW</Typography>
  <Typography sx={{fontSize:"53px",color:"#423c39",fontFamily:"serif"}}>COLLECTION</Typography>
     <Button
              
              sx={{
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
