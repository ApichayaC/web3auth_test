import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

type SelectValueType = {
  data: Array<string | any>;
  handleChange: (val: string) => void;
};

export default function SelectValue({ data, handleChange }: SelectValueType) {
  return (
    <Select
      items={data}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      {(val) => <SelectItem key={val}>{val}</SelectItem>}
    </Select>
  );
}
