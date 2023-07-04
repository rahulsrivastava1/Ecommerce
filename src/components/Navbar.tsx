import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ m: 2 }}
            >
              Home
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
    </Box>
  );
};

export default Navbar;
