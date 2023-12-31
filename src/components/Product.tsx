import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

type ProductType = {
  id: string;
  name: string;
  image: string;
  rating: number;
  desc: string;
  price: number;
  brand: string;
  categoryName: string | undefined;
};

const Product = ({
  id,
  name,
  price,
  image,
  desc,
  rating,
  categoryName,
}: ProductType) => {
  return (
    <Link
      to={`/category/${categoryName}/${id}`}
      style={{ textDecoration: "none" }}
    >
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
    </Link>
  );
};

export default Product;
