import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
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
            Cart
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
