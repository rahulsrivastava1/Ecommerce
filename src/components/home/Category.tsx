import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Product from "../Product";
import { laptop, mouse } from "../../assests/products";
import { laptopBrands, mouseBrands } from "../../assests/brand";
import Filter from "../Filter";

function Category() {
  const { categoryName } = useParams();

  const products =
    categoryName === "laptop" ? laptop : categoryName === "mouse" ? mouse : [];

  const brands =
    categoryName === "laptop"
      ? laptopBrands
      : categoryName === "mouse"
      ? mouseBrands
      : [];

  return (
    <Box>
      <Typography variant="h4" gutterBottom marginTop={2} textAlign="center">
        {categoryName?.charAt(0).toUpperCase() + categoryName.slice(1)}
      </Typography>
      {products.length === 0 ? (
        <Typography component="p" ml={5}>
          There is no item for now in this category...
        </Typography>
      ) : (
        <Stack direction="row">
          <Filter brands={brands} />
          <Box sx={{ width: "100%" }}>
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
                    desc={prod.desc}
                    name={prod.name}
                    image={prod.image}
                    price={prod.price}
                    rating={prod.rating}
                  />
                );
              })}
            </Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}

export default Category;
