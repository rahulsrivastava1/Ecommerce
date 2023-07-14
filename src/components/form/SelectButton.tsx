import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch } from "../../redux/hooks";
import { changeProductQuantity } from "../../redux";

type SelectButtonType = {
  qty: number;
  id: string;
};

const SelectButton = ({ qty, id }: SelectButtonType) => {
  const dispatch = useAppDispatch();

  const [noOfItem, setNoOfItem] = React.useState(qty);

  const handleChange = (event: SelectChangeEvent) => {
    setNoOfItem(Number(event.target.value));
    dispatch(changeProductQuantity(id, Number(event.target.value), ""));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
      <InputLabel id="demo-select-small-label">Quantity</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={String(noOfItem)}
        label="No. of Items"
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectButton;
