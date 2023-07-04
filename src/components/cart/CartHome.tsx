import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Cart from "./Cart";
import PriceDetails from "../PriceDetails";

function CartHome() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" gutterBottom marginTop={2} textAlign="center">
          Your Items
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={70}>
            <Cart />
            <PriceDetails />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default CartHome;
