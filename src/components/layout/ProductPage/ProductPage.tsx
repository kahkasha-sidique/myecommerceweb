"use client";
import {
  FacebookOutlined,
  Favorite,
  Pinterest,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { AllProduct } from '@/data/product';
import { useCartStore } from "@/store/cartStore";


type ProductType = (typeof AllProduct)[0];

interface ProductPageProps {
  product: ProductType;
}
export default function ProductPage({product}:ProductPageProps) {
  const [size, setSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const addtoCart=useCartStore((state)=>state.addToCart)



  const setting = [
    {
      title: "PRODUCT INFO",
      para: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
    },
    {
      title: "RETURN AND REFUND POLICY",
      para: "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
    },
  ];

 

  return (
    <Box sx={{ background: "#f5f2f2", py: 10,px: { lg: 30 },color:"#423c39"}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ width: { xs: "100%", md: "48%" } }}>
            <Image
              src={`/images/product/${product.image}`}
              alt="product"
              width={530}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
           
            <Typography sx={{ mt: 3 }}>
             I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.
            </Typography>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography variant="h6">{product.name}</Typography>
           
            <Typography>SKU:{product.sku}</Typography>

            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              ${product.Price}
            </Typography>
          
            {/* COLOR */}
            <Typography sx={{ mt: 2 }}>Color:{product.color}*</Typography>
            <Box
              sx={{
                mt: 1,
                height: 30,
                width: 30,
                border: "1px solid #423c39",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: 20,
                  width: 20,
                  background: product.color,
                  borderRadius: "50%",
                  border: "1px solid #423c39",
                }}
              />
            </Box>

            {/* SIZE */}
            <Typography sx={{ mt: 2 }}>Size*</Typography>
            <FormControl fullWidth>
              <Select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                sx={{ mt: 1, background: "#fff" }}
              >
                <MenuItem value="Small">Small</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Large">Large</MenuItem>
              </Select>
            </FormControl>

            {/* QUANTITY */}
            <Typography sx={{ mt: 2 }}>Quantity*</Typography>
           <Button
              
              sx={{
                mt: 1,
                background: "#f5f2f2",
                color: "#423c39",
                py:1,
                width:"30%",
                 borderRadius:"0px",
                border:"1px solid #423c39",
                gap:2,
                
              }}
            >
              <Typography onClick={()=>setQuantity(quantity-1)} >-</Typography>
              <Typography>{quantity}</Typography>
              <Typography onClick={()=>setQuantity(quantity+1)}>+</Typography>
            </Button>

            {/* BUTTONS */}
         <Box sx={{width:"100%",display:"flex",gap:2}}>
   <Button
              
              sx={{
                mt: 3,
                background: "#f5f2f2",
                color: "#423c39",
              
                width:"78%",
                 borderRadius:"0px",
                border:"1px solid #423c39"
              }}
              onClick={()=>addtoCart(product)}
            >
              Add to Cart
            </Button>
                <Button
              
              sx={{
                mt: 3,
                background: "#f5f2f2",
                color: "#423c39",
                width:"15%",
                 borderRadius:"0px",
                border:"1px solid #423c39"
              }}
            >
             <Favorite/>
            </Button>
            </Box>

            <Button
              sx={{
                mt: 2,
                width: "100%",
                background: "#423c39",
                color: "#fff",
                borderRadius: 0,
                py:1
              }}
            >
              Buy Now
            </Button>

            {/* ACCORDION */}
            <Box sx={{ mt: 3 }}>
              {setting.map((item, i) => (
                <Box key={i} sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === i ? null : i)
                    }
                  >
                    <Typography>{item.title}</Typography>
                    <Typography>
                      {expandedIndex === i ? "-" : "+"}
                    </Typography>
                  </Box>

                  {expandedIndex === i && (
                    <Typography sx={{ mt: 2, fontSize: "16px" }}>
                      {item.para}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          
            {/* SOCIAL */}
            <Box sx={{ display: "flex", gap: 2, mt: 2 ,cursor:"pointer"}}>
              <FacebookOutlined sx={{fontSize:"21px"}}/>
              <Twitter sx={{fontSize:"21px"}}/>
              <Pinterest sx={{fontSize:"21px"}} />
              <WhatsApp sx={{fontSize:"21px"}} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}