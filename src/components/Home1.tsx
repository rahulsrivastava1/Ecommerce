import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Product from "./Product";
import { products } from "../assests/products";

const Home = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" gutterBottom marginTop={2} textAlign="center">
          Products
        </Typography>
        <Box
          marginTop={3}
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          marginLeft={2}
        >
          {products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                name={prod.name}
                image={prod.image}
                price={prod.price}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
