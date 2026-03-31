import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function RefundPolicy() {
  return (
    <Box sx={{ background: "white", color: "#423c39", py: 6 ,px:{lg:5, md:6, xs:3} }}>
      <Container maxWidth={false} disableGutters>
      <Typography sx={{color:"#423c39",fontSize: { md: "34px", xs: "30px" },mb:8}}>REFUND POLICY</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600}}}>A legal disclaimer</Typography>
      <Typography sx={{maxWidth:720}}>The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of a Refund Policy. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific refund policies that you wish to establish between your business and your customers. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Refund Policy.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>Refund Policy - the basics </Typography>
      <Typography sx={{maxWidth:720}}>Having said that, a Refund Policy is a legally binding document that is meant to establish the legal relations between you and your customers regarding how and if you will provide them with a refund. Online businesses selling products are sometimes required (depending on local laws and regulations) to present their product return policy and refund policy. In some jurisdictions, this is needed in order to comply with consumer protection laws. It may also help you avoid legal claims from customers that are not satisfied with the products they purchased.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>What to include in the Refund Policy</Typography>
      <Typography sx={{maxWidth:720,mb:4}}>Generally speaking, a Refund Policy often addresses these types of issues: the timeframe for asking for a refund; will the refund be full or partial; under which conditions will the customer receive a refund; and much, much more.</Typography>
        
      </Container>
      </Box>
  )
}
