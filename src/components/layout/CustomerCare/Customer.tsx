import React from 'react';
import { Box, Button, Container, Divider, InputAdornment, TextField, Typography } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import CustomerTab from './CustomerTab';

export default function Customer() {
  return (
    <Box sx={{ background: "#f5f2f2", color: "#423c39", py: 4, px: { lg: 5, md: 6, xs: 3 } }}>
      <Container maxWidth={false} disableGutters>

        {/* HEADER */}
        <Typography sx={{ fontSize: { md: "34px", xs: "30px" }, fontFamily: "serif", mb: 2 }}>
          CUSTOMER CARE
        </Typography>

        <Typography sx={{ fontSize: { md: "15px", xs: "14px" }, mb: 4, maxWidth: "500px", fontWeight: 200 }}>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </Typography>

        <Divider sx={{ mb: {md:4,xs:0}, borderColor: "#423c39" }} />

        {/* MAIN FLEX LAYOUT */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: {md:32,xs:5},
            justifyContent: "flex-start"
          }}
        >
          {/* LEFT COLUMN: Contact Info */}
          <Box sx={{  minWidth: 250 }}>
            <Typography sx={{ mt: 4, fontWeight: 500 }}>Have any questions or concerns?</Typography>
            <Typography>We’re always ready to help!</Typography>

            <Box sx={{ mt: 2 }}>
              <Typography>Call us at</Typography>
              <Typography>123-456-7890</Typography>
              <Typography >or send us an email to:</Typography>
              <Typography>info@mysite.com</Typography>
            </Box>
          </Box>

          {/* CENTER COLUMN: Form */}
          <Box sx={{ minWidth: {md:550,xs:255}, backgroundColor: "#f5f5f5" }}>
            <Box sx={{ display: "grid", flexWrap: "wrap", gap: 2,gridTemplateColumns:{md:"1fr 1fr",xs:"1fr"}}}>
              <Box>
                <TextField fullWidth label="First Name *" multiline rows={2}  variant="standard" />
              </Box>
              <Box >
                <TextField  fullWidth label="Last Name *" multiline rows={2} variant="standard" />
              </Box>
              <Box >
                <TextField fullWidth label="Email *" multiline rows={2} variant="standard" />
              </Box>
              <Box >
                <TextField fullWidth label="Subject" multiline rows={2} variant="standard" />
              </Box>
              <Box >
                <TextField fullWidth label="Message" multiline rows={4} variant="standard" />
              </Box>
              </Box>
               <Box >
                <Button
                  variant="contained"
                  
                  sx={{
                    backgroundColor: "#4a403a",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    borderRadius:"0px",
                    mt:2,
                    "&:hover": { backgroundColor: "#3a332e" },
                  }}
                >
                  Submit
                </Button>
            </Box>
          </Box>

         
        
        </Box>
        <Divider sx={{ mt: {md:15,xs:2}, borderColor: "#423c39" }} />

      
        {/* HEADER */}
        <Typography sx={{ fontSize: { md: "34px", xs: "30px" }, fontFamily: "serif",mt:{md:4,xs:3},mb:2}}>
          RETURNS
        </Typography>

        <Typography sx={{ fontSize: { md: "15px", xs: "12px" }, mb: 4, maxWidth: "500px", fontWeight: 200 }}>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </Typography>

        <Divider sx={{ mb: {md:4,xs:2}, borderColor: "#423c39" }} />

        {/* MAIN FLEX LAYOUT */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: {md:32,xs:0},
            justifyContent: "flex-start"
          }}
        >
          {/* LEFT COLUMN: Contact Info */}
          <Box sx={{  minWidth: 250 }}>
            <Typography sx={{ mt: {md:4,xs:2}, fontWeight: 500, fontSize: { md: "34px", xs: "27px" }}}>Frequently asked questions</Typography>
          </Box>

          {/* CENTER COLUMN: Form */}
          <Box sx={{ minWidth: 280, backgroundColor: "#f5f5f5" }}>
         <Box sx={{mt:{md:4,xs:2}}}>
              <TextField
      fullWidth
      label="Looking for something?"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlined />
          </InputAdornment>
        ),
      }}
    />
              </Box>
          </Box>
        </Box>
        
        <CustomerTab/>
      </Container>
    </Box>
  );
}