import { Box, Button, Container, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Store() {
  return (
     <Box sx={{ background: "#f5f2f2", color: "#423c39", py: 6 ,px:{lg:5, md:6, xs:3} ,height:{md:"55vh"}}}>
      <Container maxWidth={false} disableGutters>

        
        <Typography sx={{ fontSize: {md:"38px",xs:"30px",fontFamily:"serif  "} }}>
          STORES
        </Typography>
       
       <Typography sx={{ fontSize: {md:"18px",xs:"15px"}, mb: {md:4,xs:2} }}>
       Find us in these fine stores:
        </Typography>
        
        <Divider sx={{color:"#423c39"}}/>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 4
          }}
        >

          
          <Box sx={{ minWidth: "250px" }}>
            <Typography sx={{ fontWeight: 700, mb: 2,mt:4,fontSize:"16px" }}>
              The Blues
            </Typography>

            <Typography>500 Terry Francine Street</Typography>
            <Typography>San Francisco, CA 94158</Typography>
            <Typography>Phone: 123.456.7890</Typography>
            <br/>

            <Typography >Mon-Sat: 10:00am-7:00pm</Typography>
            <Typography>Sunday: Closed​</Typography>
          </Box>

          
         <Box sx={{ minWidth: "250px" }}>
            <Typography sx={{ fontWeight: 700, mb: 2,mt:4,fontSize:"16px" }}>
              Eva
            </Typography>

            <Typography>500 Terry Francine Street</Typography>
            <Typography>San Francisco, CA 94158</Typography>
            <Typography>Phone: 123.456.7890</Typography>
            <br/>

            <Typography >Mon-Sat: 10:00am-7:00pm</Typography>
            <Typography>Sunday: Closed​</Typography>
          </Box>

          
           <Box sx={{ minWidth: "250px" }}>
            <Typography sx={{ fontWeight: 700, mb: 2,mt:4,fontSize:"16px" }}>
              City Center
            </Typography>

            <Typography>500 Terry Francine Street</Typography>
            <Typography>San Francisco, CA 94158</Typography>
            <Typography>Phone: 123.456.7890</Typography>
            <br/>

            <Typography >Mon-Sat: 10:00am-7:00pm</Typography>
            <Typography>Sunday: Closed​</Typography>
          </Box>

        </Box>

      
       

      </Container>
    </Box>
  )
}
