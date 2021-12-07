import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Card, CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ShoppingBagContext } from "../context/ShoppingBagContext";

const BagItems = (props) => {
  const { removeFromBag } = ShoppingBagContext();
  const { item } = props;

  return (
    <Card>
      <Box display="flex">
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 80, height: 80, p: 1 }}
            image={item.image}
            alt="Shop Rutina"
          />
        </Box>
        <Box
          px={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
        >
          <Box>
            <Typography fontWeight="bold">{item.title}</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" color="primary">
              $ {item.price / 100}
            </Typography>
          </Box>
        </Box>
        <Box
          px={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography fontWeight="bold" color="primary">
            x {item.quantity}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <IconButton
            aria-label="delete"
            onClick={() => removeFromBag(item.id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default BagItems;
