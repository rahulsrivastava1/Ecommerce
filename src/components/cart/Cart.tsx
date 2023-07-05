import { Box } from "@mui/material";
import CartProduct from "./CartProduct";

const Cart = () => {
  return (
    <Box flex={4} p={2}>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </Box>
  );
};

export default Cart;
