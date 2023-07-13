import { Box } from "@mui/material";
import CartProduct from "./CartProduct";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cart);

  return (
    <Box flex={4} p={2}>
      {cartProducts.map((prod, index) => {
        return (
          <CartProduct
            key={index}
            id={prod.id}
            desc={prod.desc}
            name={prod.name}
            image={prod.image}
            price={prod.price}
          />
        );
      })}
    </Box>
  );
};

export default Cart;
