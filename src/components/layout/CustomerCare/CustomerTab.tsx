"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { brown } from '@mui/material/colors';
import XIcon from '@mui/icons-material/X';
import { ArrowBackIosNewOutlined, FacebookOutlined, InsertLink, Instagram, KeyboardArrowDown, KeyboardArrowUp, LinkedIn, LinkOutlined, Twitter } from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomerTab() {
  const [value, setValue] = React.useState(0);
const notification = [
  {
    title: "What is an FAQ section?",
    para: "An FAQ section can be used to quickly answer common questions about your business like 'Where do you ship to?', 'What are your opening hours?', or 'How can I book a service?'.",
    icons: [<FacebookOutlined />,<XIcon/>,<LinkedIn/>,<InsertLink/>]
  },
    {
    title: "Why do FAQs matter?",
    para: "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
    icons: [<FacebookOutlined />,<XIcon/>,<LinkedIn/>,<InsertLink/>]
  },
      {
    title: "Where can i add my FAQs?",
    para: "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
    icons: [<FacebookOutlined />,<XIcon/>,<LinkedIn/>,<InsertLink/>]
  },
];
const setting = [
  {
    title: "How do i add a new question & answer?",
    para: "An FAQ section can be used to quickly answer common questions about your business like 'Where do you ship to?', 'What are your opening hours?', or 'How can I book a service?'.",
    icons: [<FacebookOutlined />,<XIcon/>,<LinkedIn/>,<InsertLink/>]
  },
    {
    title: "Can i insert an image,video,or GIF in my FAQ?",
    para: "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
    icons: [<FacebookOutlined />,<XIcon/>,<LinkedIn/>,<InsertLink/>]
  },
      {
    title: "How do i edit or remove the 'Frequently Asked Questions' title?",
    para: "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
    icons: [<FacebookOutlined />,<XIcon/>,<LinkedIn/>,<InsertLink/>]
  },
];
const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    
  };

  return (
    <Box sx={{ width: '100%',mt:4 }}>
      <Box >
       <Tabs
  value={value}
  onChange={handleChange}
  sx={{
    "& .MuiTab-root": {
      color: "#5b5754", // normal text color (brown)
    },
    "& .Mui-selected": {
      color: "#666261", // selected tab text (dark brown)
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#423c39", // line color
    },
  }}
>
  <Tab
    label="General"
    {...a11yProps(0)}
    sx={{ textTransform: "capitalize", fontSize: "17px" }}
  />
  <Tab
    label="Setting up FAQs"
    {...a11yProps(1)}
    sx={{ textTransform: "capitalize", fontSize: "17px" }}
  />
</Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
          <Box
        sx={{
          width: { xs: "100%", md: "100%" },
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {notification.map((noti, i) => {
          
                    

          return (
            <Box
              key={i}
              sx={{
                width: {md:"70%",xs:"100%"},
                display: "flex",
                justifyContent: "space-between",

                border:{md:
                  i !== notification.length
                    ? "1px solid #423c39"
                    : "none"},
                    borderBottom:{xs:
                  i !== notification.length
                    ? "1px solid #423c39"
                    : "none"},
                pb: 1,
                flexDirection:"column"
               
              }}
            >
              <Box  sx={{
        
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center",
                pb: 1,
                flexDirection:"row"}}>
              <Typography
                sx={{
                  color: "#423c39",
                  fontSize: { xs: "17px", md: "20px" },
                
                  pt:{md:3,xs:1},
                  px:{md:3,xs:0}
                }}
              >
                {noti.title}
              </Typography>
                 <Box
                sx={{
                  color: brown,
                  fontWeight: "bold",
                  fontSize: { xs: "20px", md: "24px" },
                  cursor: "pointer",
                  display:"flex",
                  justifyContent:"flex-end",
                    pt:3,
                }}
                
               onClick={() => {
  ;
    setExpandedIndex(expandedIndex === i ? null : i);
  }} 
              >
                 {expandedIndex === i ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
              </Box>
              </Box>
           {expandedIndex === i && (
  <Typography
    sx={{
      fontSize:{md:"15px",xs:"12px"},
      color: "#423c39",
      pb:{md:3},
      width: { xs: "100%", md: "50%" },
      pl:{md:3,xs:0},
      pt:3
    }}
  >
    {noti.para}
  </Typography>
  
)}
           {expandedIndex === i && (
  <Typography
    sx={{
      fontSize:{md:"15px",xs:"12px"},
      color: "#423c39",
      width: { xs: "100%", md: "50%" },
      pl:{md:3,xs:0}
    }}
  >
    {noti.icons}
  </Typography>
  
)}

          
            </Box>
          );
        })}
      </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
                <Box
        sx={{
          width: { xs: "100%", md: "100%" },
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {setting.map((noti, i) => {
          
                    

          return (
            <Box
              key={i}
              sx={{
                width: {md:"70%",xs:"100%"},
                display: "flex",
                justifyContent: "space-between",

                border:{md:
                  i !== notification.length
                    ? "1px solid #423c39"
                    : "none"},
                    borderBottom:{xs:
                  i !== notification.length
                    ? "1px solid #423c39"
                    : "none"},
                pb: 1,
                flexDirection:"column"
               
              }}
            >
                <Box  sx={{
        
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center",
                pb: 1,
                flexDirection:"row"}}>
              <Typography
                sx={{
                  color: "#423c39",
                  fontSize: { xs: "16px", md: "20px" },
                
                  pt:{md:3,xs:1},
                  px:{md:3,xs:0}
                }}
              >
                {noti.title}
              </Typography>
               <Box
                sx={{
                  color: brown,
                  fontWeight: "bold",
                  fontSize: { xs: "20px", md: "24px" },
                  cursor: "pointer",
                  display:"flex",
                  justifyContent:"flex-end",
                  pt:3,
                  px:3
                }}
                
               onClick={() => {
  ;
    setExpandedIndex(expandedIndex === i ? null : i);
  }} 
              >
                 {expandedIndex === i ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
              </Box>
              </Box>
           {expandedIndex === i && (
  <Typography
    sx={{
      fontSize:{md:"15px",xs:"12px"},
      color: "#423c39",
      pb:{md:3},
      width: { xs: "100%", md: "50%" },
      pl:{md:3,xs:0},
      pt:{md:3,xs:0}
    }}
  >
    {noti.para}
  </Typography>
  
)}
           {expandedIndex === i && (
  <Typography
    sx={{
      fontSize:{md:"15px",xs:"12px"},
      color: "#423c39",
      width: { xs: "100%", md: "50%" },
      pl:{md:3,xs:0}
    }}
  >
    {noti.icons}
  </Typography>
  
)}

            
            </Box>
          );
        })}
      </Box>
      </CustomTabPanel>
     
    </Box>
  );
}
