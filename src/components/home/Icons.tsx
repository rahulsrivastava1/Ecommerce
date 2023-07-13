import { Box, Stack, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Icons = () => {
  return (
    <Stack direction="row" spacing={2} mt={1} p={2}>
      <Box display="flex" flexDirection="column">
        <LocalShippingOutlinedIcon sx={{ margin: "auto" }} />
        <Typography variant="body2">Free Shipping</Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <AccessTimeOutlinedIcon sx={{ margin: "auto" }} />
        <Typography variant="body2">30-days replacement</Typography>
      </Box>
    </Stack>
  );
};

export default Icons;
