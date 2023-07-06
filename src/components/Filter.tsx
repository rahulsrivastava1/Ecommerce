import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import RadioButton from "./form/RadioButton";

type FilterProp = {
  brands: string[];
};

const Filter = ({ brands }: FilterProp) => {
  const [value, setValue] = useState<number | null>(0);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  return (
    <Box sx={{ width: "20%" }}>
      <Box sx={{ position: "fixed" }} ml={2} mt={-5}>
        <Card sx={{ minWidth: 200, minHeight: 450 }}>
          <CardContent>
            <Typography variant="h6">Filters</Typography>
            <Divider />
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">
                Rating
                <Typography
                  sx={{
                    display: value === 0 ? "none" : "block",
                    float: "right",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setValue(0)}
                >
                  &times;
                </Typography>
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <RadioButton
              value={selectedBrand}
              onChange={setSelectedBrand}
              items={brands}
              title="Brand"
            />
            <Divider />
            <RadioButton
              value={selectedOrder}
              onChange={setSelectedOrder}
              items={["ascending", "descending"]}
              title="Sort by Price"
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Filter;
