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
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux";

export type CartProductType = {
  id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
};

const CartProduct = ({ id, name, desc, price, image }: CartProductType) => {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ display: "flex", marginBottom: "1rem", padding: "5px" }}>
      <CardMedia
        component="img"
        sx={{ maxWidth: 200, height: 180, objectFit: "scale-down" }}
        image={image}
        alt={name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
              fontSize="1.5rem"
            >
              ₹{price}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              width="70%"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {desc}
            </Typography>
            <SelectButton />
          </Stack>
          <Box mt={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(removeFromCart(id, ""))}
            >
              Remove from Cart
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CartProduct;
