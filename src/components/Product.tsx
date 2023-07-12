import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

type ProductType = {
  id: string;
  name: string;
  image: string;
  rating: number;
  desc: string;
  price: string;
  brand: string;
};

const Product = ({ name, price, image, desc, rating }: ProductType) => {
  return (
    <Card sx={{ width: "21rem", marginBottom: "2rem" }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "scale-down" }}
          component="img"
          height="275"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
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
          <Typography variant="h6">
            ₹{price}
            <Typography component="span">
              <Rating
                name="read-only"
                value={rating}
                readOnly
                sx={{ fontSize: "1rem", float: "right", marginTop: "1rem" }}
              />
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
