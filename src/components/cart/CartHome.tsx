import { Box, Stack, Typography, CardMedia } from "@mui/material";
import PriceDetails from "./PriceDetails";
import Cart from "./Cart";
import { useAppSelector } from "../../redux/hooks";

const CartHome = () => {
  const cart = useAppSelector((state) => state.cart);

  if (cart.length === 0) {
    return (
      <Box m="auto">
        <CardMedia
          sx={{ objectFit: "scale-down" }}
          component="img"
          height="275"
          image="https://gifdb.com/images/high/sad-crying-cartoon-pn9anrsxt0lccjpw.gif"
          alt="sad gif"
        />
        <Typography variant="h6" textAlign="center">
          Please Add items in cart first!
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box mt={2}>
        <Stack direction="row" justifyContent="space-between">
          <Cart />
          <PriceDetails />
        </Stack>
      </Box>
    );
  }
};

export default CartHome;
