import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function ShippingPolicy() {
  return (
    <Box sx={{ background: "white", color: "#423c39", py: 6 ,px:{lg:5, md:6, xs:3} }}>
      <Container maxWidth={false} disableGutters>
      <Typography sx={{color:"#423c39",fontSize: { md: "34px", xs: "30px" },mb:8}}>SHIPPING POLICY</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600}}}>A legal disclaimer</Typography>
      <Typography sx={{maxWidth:720}}>The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of a Shipping Policy. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific shipping policies that you wish to establish between your business and your customers. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Shipping Policy.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>Shipping Policy - the basics</Typography>
      <Typography sx={{maxWidth:720}}>Having said that, a Shipping Policy is a legally binding document that is meant to establish the legal relations between you and your customers. It is the legal framework for presenting your obligations to your customers, but also to address different possible scenarios that may occur, and what happens in each and every case. </Typography>
      <Typography sx={{maxWidth:720,mt:3}}>A Shipping Policy is a good practice and it helps both sides - you and your customers. Your customers may benefit from being informed about what they can expect from your service. You may benefit because people may be likely to shop with you if you have a clear Shipping Policy in place since there won't be any questions about your shipping timeframes or processes.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>What to include in the Shipping Policy</Typography>
      <Typography sx={{maxWidth:720,mb:4}}>Generally speaking, a Shipping Policy often addresses these types of issues: the timeframe for processing orders; the shipping costs; different domestic and international shipping solutions; potential service interruptions; and much, much more.</Typography>
        
      </Container>
      </Box>
  )
}
