import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { ShoppingBagContext } from "../context/ShoppingBagContext";

function Home() {
  const {
    productList,
    // productsInBag,
    addToBag,
    removeFromBag,
  } = useContext(ShoppingBagContext);
  console.log("productList");
  console.log(productList);
  // console.log(productsInBag)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      {productList.map((product) => {
        return (
          <Card
            key={product.id}
            sx={{ maxWidth: 345 }}
            style={{ marginBottom: "30px" }}
          >
            <CardMedia
              component="img"
              height="25%"
              image={product.img}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography>$ {product.price / 100}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                onClick={() => {
                  addToBag(product);
                }}
                variant="contained"
              >
                ADD TO BAG
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
