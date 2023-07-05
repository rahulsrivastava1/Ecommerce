import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectButton = () => {
  const [noOfItem, setNoOfItem] = React.useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setNoOfItem(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
      <InputLabel id="demo-select-small-label">Quantity</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={noOfItem}
        label="No. of Items"
        onChange={handleChange}
      >
        <MenuItem value={noOfItem}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectButton;
