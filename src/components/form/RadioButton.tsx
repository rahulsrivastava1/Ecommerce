import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

type RadioButtonProp = {
  value: string;
  onChange: (value: string) => void;
  items: string[];
  title: string;
};

const RadioButton = ({ value, onChange, items, title }: RadioButtonProp) => {
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
          onClick={() => onChange("")}
        >
          &times;
        </Typography>
      </Typography>
      <RadioGroup
        aria-labelledby="brand"
        defaultValue=""
        name="brand-buttons-group"
        value={value}
        onChange={(event) => onChange(event.target.value)}
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
