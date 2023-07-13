import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ m: 2 }}
          >
            Ecommerce
          </Typography>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ m: 2 }}
          >
            {cart.length === 0 ? "Cart" : `Cart (${cart.length})`}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
