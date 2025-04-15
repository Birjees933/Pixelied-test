import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { HexColorPicker } from "react-colorful";

interface DebouncedPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const DebouncedPicker: React.FC<DebouncedPickerProps> = ({
  color,
  onChange,
}) => {
  const [value, setValue] = useState<string>(color);

  const debouncedOnChange = useDebouncedCallback(
    (newColor: string) => onChange(newColor),
    200
  );

  const handleColorChange = (newColor: string) => {
    setValue(newColor);
    debouncedOnChange(newColor);
  };

  return (
    <HexColorPicker
      color={value}
      onChange={handleColorChange}
    />
  );
};
