import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { filterByBrands, sortByOrder } from "../../redux";

type RadioButtonProp = {
  value: string;
  onSelect: (value: string) => void;
  items: string[];
  title: string;
  category: string;
};

const RadioButton = ({
  value,
  onSelect,
  items,
  title,
  category,
}: RadioButtonProp) => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography component="legend" mt={1}>
        {title}
        <Typography
          sx={{
            display: value === "" ? "none" : "block",
            float: "right",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            onSelect("");
            if (title === "Brand") {
              dispatch(filterByBrands("", category));
            } else {
              dispatch(sortByOrder("", category));
            }
          }}
        >
          &times;
        </Typography>
      </Typography>
      <RadioGroup
        aria-labelledby="brand"
        defaultValue=""
        name="brand-buttons-group"
        value={value}
        onChange={(event) => {
          onSelect(event.target.value);
          if (title === "Brand") {
            dispatch(filterByBrands(event.target.value, category));
          } else {
            const order =
              event.target.value === "Low to High" ? "ascending" : "descending";
            dispatch(sortByOrder(order, category));
          }
        }}
      >
        {items.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item}
              control={<Radio />}
              label={item}
              disabled={value === "" ? false : true}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default RadioButton;
