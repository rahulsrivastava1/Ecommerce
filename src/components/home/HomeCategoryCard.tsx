import { Card, Box, Typography, CardContent, CardMedia } from "@mui/material";

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
      <Card sx={{ height: "230px", width: "13rem" }}>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {name}
          </Typography>
          <Typography variant="body1" textAlign="center">
            Starting from ₹ {startPrice}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomeCategoryCard;
