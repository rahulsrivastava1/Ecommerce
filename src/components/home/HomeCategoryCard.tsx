import { Card, Box, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

export type HomeCategoryCardProp = {
  image: string;
  name: string;
  startPrice: string;
};

const HomeCategoryCard = ({
  image,
  name,
  startPrice,
}: HomeCategoryCardProp) => {
  return (
    <Box>
      <Link
        to={`/category/${name.toLowerCase()}`}
        style={{ textDecoration: "none" }}
      >
        <Card sx={{ height: "230px", width: "13rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
            sx={{ objectFit: "scale-down" }}
          />
          <CardContent>
            <Typography variant="h6" textAlign="center">
              {name}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Starting from ₹ {startPrice}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default HomeCategoryCard;
