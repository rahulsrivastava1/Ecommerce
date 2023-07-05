import { Box, Stack } from "@mui/material";
import PriceDetails from "./PriceDetails";
import Cart from "./Cart";

const CartHome = () => {
  return (
    <Box mt={2}>
      <Stack direction="row" justifyContent="space-between">
        <Cart />
        <PriceDetails />
      </Stack>
    </Box>
  );
};

export default CartHome;
