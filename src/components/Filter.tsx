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
import { useAppDispatch } from "../redux/hooks";
import { filterByRating } from "../redux";

type FilterProp = {
  brands: string[];
  category: string | undefined;
};

const Filter = ({ brands, category }: FilterProp) => {
  const [value, setValue] = useState<number>(0);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  const dispatch = useAppDispatch();

  return (
    <Box sx={{ width: "20%" }}>
      <Box ml={2}>
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
                  onClick={() => {
                    setValue(0);
                    {
                      category && dispatch(filterByRating(0, category));
                    }
                  }}
                >
                  &times;
                </Typography>
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(_event, newValue) => {
                  setValue(Number(newValue));
                  {
                    category &&
                      dispatch(filterByRating(Number(newValue), category));
                  }
                }}
              />
            </Box>
            <RadioButton
              value={selectedBrand}
              onSelect={setSelectedBrand}
              items={brands}
              title="Brand"
              category={category ?? ""}
            />
            <Divider />
            <RadioButton
              value={selectedOrder}
              onSelect={setSelectedOrder}
              items={["Low to High", "High to Low"]}
              title="Sort by Price"
              category={category ?? ""}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Filter;
