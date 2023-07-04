import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "darkred",
        marginTop: "auto",
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="#fff" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Ecommerce
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
