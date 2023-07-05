import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const PriceDetails = () => {
  return (
    <Box flex={2} p={2}>
      <Box position="fixed">
        <Card sx={{ minWidth: 400, minHeight: 300 }}>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase" }}
              color="text.secondary"
              p={0.25}
            >
              Price Details
            </Typography>
            <Divider />
            <Stack direction="row" justifyContent="space-between" mt={3}>
              <Typography variant="h6" fontWeight={400}>
                Price ( 1 item )
              </Typography>
              <Typography variant="h6" fontWeight={300}>
                ₹ 50,500
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={1}>
              <Typography variant="h6" fontWeight={400}>
                Discount
              </Typography>
              <Typography variant="h6" fontWeight={300} color="green">
                - ₹ 1,500
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={1} mb={2}>
              <Typography variant="h6" fontWeight={400}>
                Delivery charges
              </Typography>
              <Typography variant="h6" fontWeight={300} color="green">
                Free
              </Typography>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between" mt={1} mb={2}>
              <Typography variant="h6" fontWeight={800}>
                Total Amount
              </Typography>
              <Typography variant="h6" fontWeight={800}>
                ₹ 49,000
              </Typography>
            </Stack>
            <Divider />
            <Typography color="green" mt={2}>
              You will save ₹3,300 on this order
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default PriceDetails;
