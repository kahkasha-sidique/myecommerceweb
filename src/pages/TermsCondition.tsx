
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function TermsCondition() {
  return (
  <Box sx={{ background: "white", color: "#423c39", py: 6 ,px:{lg:5, md:6, xs:3} }}>
      <Container maxWidth={false} disableGutters>
      <Typography sx={{color:"#423c39",fontSize: { md: "34px", xs: "30px" },mb:8}}>TERMS & CONDITIONS</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600}}}>A legal disclaimer</Typography>
      <Typography sx={{maxWidth:720}}>The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of Terms & Conditions. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific terms you wish to establish between your business and your customers and visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Terms & Conditions. </Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>Terms & Conditions - the basics </Typography>
      <Typography sx={{maxWidth:720}}>Having said that, Terms and Conditions (“T&C”) are a set of legally binding terms defined by you, as the owner of this website. The T&C set forth the legal boundaries governing the activities of the website visitors, or your customers, while they visit or engage with this website. The T&C are meant to establish the legal relationship between the site visitors and you as the website owner. </Typography>
      <Typography sx={{maxWidth:720,mt:3}}>T&C should be defined according to the specific needs and nature of each website. For example, a website offering products to customers in e-commerce transactions requires T&C that are different from the T&C of a website only providing information (like a blog, a landing page, and so on). </Typography>
      <Typography sx={{maxWidth:720,mt:3}}>T&C provide you as the website owner the ability to protect yourself from potential legal exposure, but this may differ from jurisdiction to jurisdiction, so make sure to receive local legal advice if you are trying to protect yourself from legal exposure.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>What to include in the T&C document</Typography>
      <Typography sx={{maxWidth:720,mb:7}}>The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of Terms & Conditions. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific terms you wish to establish between your business and your customers and visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Terms & Conditions.</Typography>
      </Container>
      </Box>
  )
}
