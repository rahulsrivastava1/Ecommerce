import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

const PriceDetails = () => {
  const cart = useAppSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  let discount = total < 1500 ? 0 : 1500;

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

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
                {`Price ( ${cart.length} item )`}
              </Typography>
              <Typography variant="h6" fontWeight={300}>
                ₹ {total}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={1}>
              <Typography variant="h6" fontWeight={400}>
                Discount
              </Typography>
              <Typography variant="h6" fontWeight={300} color="green">
                - ₹ {discount}
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
                ₹ {total - discount}
              </Typography>
            </Stack>
            <Divider />
            <Typography color="green" mt={2}>
              You will save ₹{discount} on this order
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default PriceDetails;
