interface AllProduct{
    id:number
      image: string;
    name: string;
    Price: number;
    seller?: string;
    sku:string
    color:string
    price:number
}


export const AllProduct:AllProduct[]=[{
              id:1,
              image: "Product (4).jpg",
              name: "I'm a Product",
              Price: 15.99,
              seller:"Sale",
              sku:"0001",
              color:"black",
              price:19.99
          },
  {
            id:2,
              image: "Product (3).jpg",
              name: "I'm a Product",
               Price: 15.99,
                sku:"0002",
              color:"Off White",
              price:14.99
          },
          {
              id:3,
              image: "Product (5).jpg",
              name: "I'm a Product",
               Price: 15.99,
                sku:"0003",
              color:"purple",
              price:19.99
          },
          {
            id:4,
              image: "Product (1).jpg",
              name: "I'm a Product",
               Price: 15.99,
              seller:"Sale",
                 sku:"0004",
              color:"cream",
              price:59.00
          },
          {
            id:5,
              image: "Product (4).png",
              name: "I'm a Product",
            Price: 15.99,
              seller:"Sale",
                 sku:"0005",
              color:"purple",
              price:14.99
          },
          {
            id:6,
              image: "Product (1).png",
              name: "I'm a Product",
              Price: 15.99,
                 sku:"0006",
              color:"brown",
              price:11.99
              
          },
          {
            id:7,
              image: "Product (2).png",
              name: "I'm a Product",
            Price: 15.99,
              seller:"Sale",
                 sku:"0007",
              color:"red",
              price:14.99
          },
          {
            id:8,
              image: "best-seller (3).jpg",
              name: "I'm a Product",
              Price: 15.99,
              seller:"Best Seller",
                 sku:"0008",
              color:"White blue ",
              price:14.99
          },
            {
                  id:9,
              image: "best-seller (2).jpg",
              name: "I'm a Product",
               Price: 15.99,
              seller:"Best Seller",
                 sku:"0009",
              color:"brown",
              price:14.99
          },
            {
                  id:10,
              image: "best-seller (1).jpg",
              name: "I'm a Product",
               Price: 15.99,
              seller:"Best Seller",
                 sku:"0010",
              color:"Off White",
              price:15.99
          },
          
      ]