import { Copy } from "lucide-react";
import { use, useState } from "react";
import { HexColorPicker } from "react-colorful";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colorOptions } from "@/constants/data";
import { convertColor, convertToHex } from "@/utils/color-helpers";
import { COLORS_MODES } from "@/types/enums";
import CopyIcon from "../../../public/icons/copy";
import { copyTextToClipboard } from "@/utils/copy";
import { toast } from "react-hot-toast";
import DoneIcon from "../../../public/icons/done";
import useStore from "@/hooks/zustand/useStore";
import { DebouncedPicker } from "./DebouncePicker";

export const ColorPicker = ({
  palatteColor,
  cellIndex,
  colorIndex,
}: {
  palatteColor: string;
  cellIndex: number;
  colorIndex: number;
}) => {
  const [hexColor, setHexColor] = useState(palatteColor);
  const [colorMode, setColorMode] = useState<COLORS_MODES>(COLORS_MODES.HEX);
  const [colorString, setColorString] = useState(
    convertColor(hexColor, colorMode)
  );

  // Global state
  const updateShadeColor = useStore((state) => state.updateShadeColor);

  const handleHexChange = (event: any) => {
    setColorString(event.target.value);
    const newColor = convertToHex(event.target.value, colorMode);
    console.log({ newColor });

    if (newColor) {
      setHexColor(newColor);
      console.log("Color changed: ", newColor);
      updateShadeColor(cellIndex, colorIndex, newColor);
    }
  };

  const handleCopy = (color: string) => {
    copyTextToClipboard(color);
    toast("Color copied to clipboard!", {
      position: "bottom-center",
      icon: <DoneIcon />,
      style: {
        borderRadius: "10px",
        background: "#000000",
        color: "#fff",
      },
    });
  };

  return (
    <div className="w-full">
      <div className="custom-layout">
        <div className="react-colorful">
          <DebouncedPicker
            color={hexColor}
            onChange={(e: string) => {
              setHexColor(e);
              setColorString(convertColor(e, colorMode));
              updateShadeColor(cellIndex, colorIndex, e);
            }}
          />
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        {/* Color Preview */}
        <div
          className="w-9 h-9 rounded-lg shrink-0"
          style={{ backgroundColor: hexColor }}
        ></div>
        {/* Code Preview */}
        <div className="border border-[#bbb6b3] rounded-lg p-3 pr-2 flex gap-2 h-9 items-center justify-between text-black">
          <input
            className="focus-within:outline-none w-16 text-sm"
            spellCheck="false"
            value={colorString || ""}
            onChange={handleHexChange}
          />
          <button
            className="inline-flex items-center justify-center rounded-lg text-sm leading-5 font-medium 
            transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary 
            active:bg-[#e0dbd6] hover:bg-transparent text-[#725feb] p-0 w-6 h-6
            cursor-pointer"
            onClick={() => handleCopy(colorString)}
          >
            <CopyIcon />
          </button>
        </div>

        {/* Color Type Selection */}
        <Select
          value={colorMode}
          onValueChange={(e) => {
            setColorMode(e as COLORS_MODES);
            setColorString(convertColor(hexColor, e as COLORS_MODES));
          }}
        >
          <SelectTrigger
            className="flex w-full items-center justify-between border
            bg-background px-3 py-2
            focus:outline-none focus:ring-0 flex-1 gap-2 focus-visible:outline
            focus-visible:outline-purple-400 focus-visible:outline-offset-0
            border-[#bbb6b3] rounded-lg
            font-normal text-black text-sm h-9"
          >
            <SelectValue placeholder="Color Mode" />
          </SelectTrigger>
          <SelectContent className="z-9999">
            <SelectGroup>
              {colorOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

{
  /* <div
          className="react-colorful__saturation"
          style={{ backgroundColor: saturationBackground }}
          onClick={handleSaturationChange}
        >
          <div
            aria-label="Color"
            aria-valuetext={`Saturation ${color.s}%, Brightness ${color.v}%`}
            className="react-colorful__interactive"
            tabIndex={0}
            role="slider"
            onClick={handleSaturationChange}
          >
            <div
              className="react-colorful__pointer react-colorful__saturation-pointer"
              style={{
                top: saturationPointerTop,
                left: saturationPointerLeft,
              }}
            >
              <div
                className="react-colorful__pointer-fill"
                style={{ backgroundColor: hexColor }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="react-colorful__hue react-colorful__last-control"
          onClick={handleHueChange}
        >
          <div
            aria-label="Hue"
            aria-valuenow={color.h}
            aria-valuemax={360}
            aria-valuemin={0}
            className="react-colorful__interactive"
            tabIndex={0}
            role="slider"
            style={{ background: hueBackground }}
            onClick={handleHueChange}
          >
            <div
              className="react-colorful__pointer react-colorful__hue-pointer"
              style={{
                top: "50%",
                left: huePointerLeft,
              }}
            >
              <div
                className="react-colorful__pointer-fill"
                style={{ backgroundColor: `hsl(${color.h}, 100%, 50%)` }}
              ></div>
            </div>
          </div>
        </div> */
}
