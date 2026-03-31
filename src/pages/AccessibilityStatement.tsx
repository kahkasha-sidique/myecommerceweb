import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function AccessibilityStatement() {
  return (
      <Box>
      <Container maxWidth={false} disableGutters>
      <Box sx={{background:"#423c39",color:"white", pt: 13,pb:3 ,px:{lg:5, md:6, xs:3}}}>
              <Typography sx={{maxWidth:720}}>The purpose of the following template is to assist you in writing your accessibility statement. Please note that you are responsible for ensuring that your site's statement meets the requirements of the local law in your area or region.</Typography>
              <Typography sx={{maxWidth:720,mt:3}}>*Note: This page currently has 2 sections. Once you complete editing the Accessibility Statement below, you can delete this section, and leave only the one with the Accessibility Statement itself.</Typography>
              <Typography sx={{maxWidth:720,mt:3}}>To learn more about this, check out our article <span style={{textDecoration:"underline"}}>“Accessibility: Adding an Accessibility Statement to Your Site”.</span></Typography>
      </Box>
       <Box sx={{background:"white",color:"#423c39", pt: 6,pb:3 ,px:{lg:5, md:6, xs:3}}}>
              <Typography sx={{color:"#423c39",fontSize: { md: "34px", xs: "30px" },mb:6}}>ACCESSIBILITY STATEMENT</Typography>
              <Typography sx={{maxWidth:720}}>This statement was last updated on [enter relevant date].</Typography>
              <Typography sx={{maxWidth:720,mt:3}}>We at [enter organization / business name] are working to make our site [enter site name and  address] accessible to people with disabilities.</Typography>
              <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>What web accessibility is</Typography>
              <Typography sx={{maxWidth:720}}>An accessible site allows visitors with disabilities to browse the site with the same or a similar level of ease and enjoyment as other visitors. This can be achieved with the capabilities of the system on which the site is operating, and through assistive technologies.</Typography>
              <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5}}>Accessibility adjustments on this site</Typography>
              <Typography sx={{maxWidth:720}}>We have adapted this site in accordance with WCAG [2.0 / 2.1 / 2.2 - select relevant option] guidelines, and have made the site accessible to the level of [A / AA / AAA - select relevant option]. This site's contents have been adapted to work with assistive technologies, such as screen readers and keyboard use. As part of this effort, we have also [remove irrelevant information]:</Typography>
              <ul style={{fontSize:"17px"}}>
                <li>Used the Accessibility Wizard to find and fix potential accessibility issues</li>
                <li>Set the language of the site </li>
                <li>Set the content order of the site’s pages</li>
                <li>Defined clear heading structures on all of the site’s pages</li>
                <li>Added alternative text to images</li>
                <li>Implemented color combinations that meet the required color contrast</li>
                <li>Reduced the use of motion on the site</li>
                <li>Ensured all videos, audio, and files on the site are accessible</li>
              </ul>
              <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5,maxWidth:720}}>Declaration of partial compliance with the standard due to third-party content [only add if relevant]</Typography>
              <Typography sx={{maxWidth:720,mb:4}}>The accessibility of certain pages on the site depend on contents that do not belong to the organization, and instead belong to [enter relevant third-party name]. The following pages are affected by this: [list the URLs of the pages]. We therefore declare partial compliance with the standard for these pages.</Typography>
               <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5,maxWidth:720}}>Accessibility arrangements in the organization [only add if relevant]</Typography>
              <Typography sx={{maxWidth:720,mb:4}}>[Enter a description of the accessibility arrangements in the physical offices / branches of your site's organization or business. The description can include all current accessibility arrangements  - starting from the beginning of the service (e.g., the parking lot and / or  public transportation stations) to the end (such as the service desk, restaurant table, classroom etc.). It is also required to specify any additional accessibility arrangements, such as disabled services and their location, and accessibility accessories (e.g. in audio inductions and elevators) available for use]</Typography>
              <Typography sx={{color:"#423c39",fontSize:{md:"20px",xs:"18px",fontWeight:600},mt:5,maxWidth:720}}>Requests, issues and suggestions</Typography>
              <Typography sx={{maxWidth:720}}>If you find an accessibility issue on the site, or if you require further assistance, you are welcome to contact us through the organization's accessibility coordinator:</Typography>
              <ul style={{fontSize:"17px"}}>
                <li>[Name of the accessibility coordinator]</li>
                <li>[Telephone number of the accessibility coordinator]</li>
                <li>[Email address of the accessibility coordinator]</li>
                <li>[Enter any additional contact details if relevant / available]</li>
              </ul>
      </Box>
      </Container>
      </Box>
  )
}
