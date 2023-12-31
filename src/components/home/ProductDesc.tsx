import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { electronicsHomeProducts } from "../../assests/products";
import Icons from "./Icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addtoCart } from "../../redux";

const initialState = {
  id: "",
  name: "",
  image: "",
  desc: "",
  price: 0,
  brand: "",
  categoryName: "",
  rating: 0,
  available: false,
  qty: 1,
};

const ProductDesc = () => {
  const { id, categoryName = "" } = useParams<{
    id: string;
    categoryName?: string;
  }>();

  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    const product = electronicsHomeProducts[
      categoryName as keyof typeof electronicsHomeProducts
    ]?.find((prod) => prod.id === id);
    setProduct((prevProd) => ({ ...prevProd, ...product }));
  }, []);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const productInCart = cart.some((c) => c.id === id);

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        mt={3}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box sx={{ minWidth: "40%" }}>
          <CardMedia
            sx={{ objectFit: "scale-down" }}
            component="img"
            height="450"
            width="200"
            image={product.image}
            alt={product.name}
          />
        </Box>
        <Box ml={5} sx={{ padding: "1rem" }}>
          <Typography variant="body2" fontSize={16}>
            {product.desc}
          </Typography>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            sx={{ fontSize: "1.3rem", marginTop: "0.5rem" }}
          />
          <Typography variant="h6" mt={0.5} ml={1} sx={{ fontSize: "1.5rem" }}>
            ₹{product.price}
          </Typography>
          <Icons />
          <Divider />
          <Box m={2} p={1}>
            <Typography>
              Available:
              <Typography
                color={`${product.available === true ? "Green" : "Red"}`}
                component="span"
              >{`${
                product.available === true ? " In Stock" : " Not available"
              }`}</Typography>
            </Typography>
            <Typography>
              Category:{" "}
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </Typography>
            <Typography>Brand: {product.brand}</Typography>
          </Box>
          {productInCart ? (
            <Button
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
              size="large"
              disabled={!product.available}
              sx={{
                marginTop: "1rem",
                width: "50%",
                backgroundColor: "#FF9F00",
              }}
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
              size="large"
              color="error"
              disabled={!product.available}
              sx={{
                marginTop: "1rem",
                width: "50%",
              }}
              onClick={() => dispatch<any>(addtoCart(product, ""))}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductDesc;
