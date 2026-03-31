import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <Box sx={{ background: "white", color: "#423c39", py: 6 ,px:{lg:5, md:6, xs:3} }}>
      <Container maxWidth={false} disableGutters>
      <Typography sx={{color:"#423c39",fontSize: { md: "34px", xs: "30px" },mb:8}}>PRIVACY POLICY</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600}}}>A legal disclaimer</Typography>
      <Typography sx={{maxWidth:720}}>The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of a Privacy Policy. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific privacy policies you wish to establish between your business and your customers and visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Privacy Policy.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>Privacy Policy - the basics </Typography>
      <Typography sx={{maxWidth:720}}>Having said that, a privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, processes, and manages the data of its visitors and customers. It usually also includes a statement regarding the website’s commitment to protecting its visitors’ or customers’ privacy, and an explanation about the different mechanisms the website is implementing in order to protect privacy. </Typography>
      <Typography sx={{maxWidth:720,mt:3}}>Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. You are responsible to make sure you are following the relevant legislation to your activities and location.</Typography>
      <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>What to include in the Privacy Policy</Typography>
      <Typography sx={{maxWidth:720,mb:4}}>Generally speaking, a Privacy Policy often addresses these types of issues: the types of information the website is collecting and the manner in which it collects the data; an explanation about why is the website collecting these types of information; what are the website’s practices on sharing the information with third parties; ways in which your visitors and customers can exercise their rights according to the relevant privacy legislation; the specific practices regarding minors’ data collection; and much, much more. </Typography>
      <Typography sx={{maxWidth:720,mb:13}}>To learn more about this, check out our article<span style={{textDecoration:"underline"}}> “Creating a Privacy Policy”</span>.</Typography>
      </Container>
      </Box>
  )
}
