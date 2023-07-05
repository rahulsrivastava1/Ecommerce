import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import SelectButton from "../form/SelectButton";

const Product = {
  id: 1,
  name: "Laptop",
  desc: "a battery- or AC-powered personal computer (PC) smaller than a briefcase",
  price: "50,500",
  image:
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
};

const CartProduct = () => {
  return (
    <Card sx={{ display: "flex", marginBottom: "1rem", padding: "5px" }}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 180 }}
        image={Product.image}
        alt={Product.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" component="div">
              {Product.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
              fontSize="1.5rem"
            >
              ₹{Product.price}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              width="70%"
            >
              {Product.desc}
            </Typography>
            <SelectButton />
          </Stack>
          <Box mt={2}>
            <Button variant="contained" color="error">
              Remove from Cart
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CartProduct;
