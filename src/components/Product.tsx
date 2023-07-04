import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

type ProductType = {
  id: number;
  name: string;
  image: string;
  price: string;
};

const Product = (props: ProductType) => {
  return (
    <Card sx={{ width: "21rem", marginBottom: "2rem" }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="200"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
