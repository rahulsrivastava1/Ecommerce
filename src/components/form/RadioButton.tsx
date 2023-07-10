import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { filterByBrands } from "../../redux";

type RadioButtonProp = {
  value: string;
  onChange: (value: string) => void;
  items: string[];
  title: string;
  category: string;
};

const RadioButton = ({
  value,
  onChange,
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
            onChange("");
            dispatch(filterByBrands("", category));
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
          onChange(event.target.value);
          dispatch(filterByBrands(event.target.value, category));
        }}
      >
        {items.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item}
              control={<Radio />}
              label={item}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default RadioButton;
