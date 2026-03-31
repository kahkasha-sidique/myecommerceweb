"use client"


import { AllProduct } from '@/data/product';
import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Checkbox, Container, Divider, Slider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

export default function Sale() {

    const[selected,setSelected]=React.useState("Sale")
 
      const setting = [
    {
      title: "Price",
      para: "An FAQ section ",

    },
      {
      title: "Color",
      para: "FAQs are a ",
      
    },
        {
      title: "Size",
      para: "FAQs can be ",

    },
  ];
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const filterProduct=selected==="All Product"?AllProduct:AllProduct.filter((item)=>item.seller==selected)
    return (
      <Box sx={{ background: "#f5f2f2", py: 5,width:"100%"}}>
          <Container maxWidth={false} disableGutters sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row",gap:2}}>
          <Box sx={{display:"flex",px:4,flexDirection:"column",width:"13%",}}>
              <Typography sx={{ fontSize: "17px", display: "flex", alignItems: "center" }}>Home <ArrowForwardIos sx={{ fontSize: "16px", mx: 0.5   }} />{selected}</Typography>
          <Typography sx={{fontSize:"18px",fontFamily:"serif",mt:8,mb:1}}>BROWSER BY</Typography>
          <Divider sx={{width:"100%"}}/>
          <Typography sx={{mt:1,cursor:"pointer","&:hover": {
      textDecoration: "underline",
    },}}onClick={()=>setSelected("All Product")}>All Products</Typography>
          <Typography sx={{mt:1,cursor:"pointer","&:hover": {
      textDecoration: "underline",
    },}} onClick={()=>setSelected("Best Seller")}>Best Sellers</Typography>
          <Typography sx={{mt:1,cursor:"pointer",textDecoration:"underline"}} onClick={()=>setSelected("Sale")}>Sale</Typography>
          <Typography sx={{fontSize:"18px",fontFamily:"serif",mt:6,mb:1}}>FILTER BY</Typography>
          <Divider sx={{width:"100%"}}/>

                <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: { xs: 2, md: 2 },
            }}
          >
            {setting.map((noti, i) => (
              <Box
                key={i}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column", // ✅ main fix
                  borderBottom:
                    i !== setting.length
                      ? "1px solid lightgrey"
                      : "none",
                  pb: 2,
                }}
              >
                {/* QUESTION ROW */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    
                  }}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: { xs: "16px", md: "16px" },
                  
                    }}
                  >
                    {noti.title}
                  </Typography>

                  <Box
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: { xs: "16px", md: "18px" },
                      cursor: "pointer",
                      
                    }}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === i ? null : i)
                    }
                  >
                    {expandedIndex === i ? "−" : "+"}
                  </Box>
                </Box>

                {/* ANSWER */}
                {expandedIndex === i && (
                  <Typography
                    sx={{
                      
                      fontSize: { md: "16px", xs: "12px" },
                      color: "black",
                      width: { xs: "100%", md: "80%" },
                      transition: "all 0.3s ease",
                      
                    }}
                  >
                  {noti.title === "Price" && (
    <Box sx={{ mt: 1  }}>
      <Slider
        defaultValue={[11, 59]}
        size='small'
        min={11}
        max={59}
        valueLabelDisplay="auto"
        sx={{ color: "#999695" ,width:"120%"}}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" ,gap:17}}>
        <Typography>$11</Typography>
        <Typography>$59</Typography>
      </Box>
    </Box>
  )}
  {noti.title === "Color" && (
    <Box sx={{ display: "grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", gap: 1, mt: 2 }}>
      {["#b8b0a2", "#000", "#7b4f2a", "#9ec7cf", "#dce6a8", "#c9c5bb", "#5a0f2e", "#ff3b3b", "#eee"].map((color, i) => (
        <Box
          key={i}
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: color,
            border: "1px solid #999",
            cursor: "pointer"
          }}
        />
      ))}
    </Box>
  )}
  {noti.title === "Size" && (
    <Box >
      {["36", "37", "38", "39", "40", "41", "Large", "Medium", "Small"].map((size, i) => (
        <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox size="small"/>
          <Typography>{size}</Typography>
        </Box>
      ))}
    </Box>
  )}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
          </Box>
          <Box sx={{display:"flex",px:4,py:9,flexDirection:"column",mb:4}}>
            {selected==="All"?(
              <>
            <Typography sx={{fontSize:"26px",fontFamily:"serif"}}>ALL PRODUCTS</Typography> 
            <Typography sx={{maxWidth:650,mb:7}}>This is your category description. It’s a great place to tell customers what this category is about, connect with your audience and draw attention to your products.</Typography>
            </>
            ):(
            <Typography sx={{fontSize:"26px",fontFamily:"serif",mb:6}}>{selected.toUpperCase()}</Typography>
          ) }
              <Typography sx={{mb:2,fontSize:"15px",color:"grey"}}>{filterProduct.length} products</Typography>
            <Box sx={{display:"grid",gridTemplateColumns:{lg:"1fr 1fr 1fr 1fr",md:"1fr 1fr 1fr",sm:"1fr 1fr",xs:"1fr",gap:4}}}>
            {filterProduct.map((item,i)=>(
              <Box key={i} sx={{ position: "relative" ,overflow:"hidden",    "& img": {
                    transition: "transform 0.4s ease"
                  },
              
                  "&:hover img": {
                    transform: "scale(0.95)"
                  }}}>
              
                  <Image
                    src={`/images/product/${item.image}`}
                    alt="all product"
                    width={300}
                    height={300}
                  />
              
                  {item.seller?
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
                  </Box>:null
  }
                  <Typography sx={{ mt:1, color:"#423c39",textAlign:"left",pl:1 }}>
                    {item.name}
                  </Typography>
              
                  <Typography sx={{ color:"#423c39",textAlign:"left",pl:1 }}>
                    {item.Price}
                  </Typography>
              
                </Box>
            ))}
            </Box>
          </Box>
          </Container>
      </Box>
    )
  
}
