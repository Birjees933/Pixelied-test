import { useEffect, useState } from "react";
import EyeIcon from "../../../public/icons/eye";
import HeartIcon from "../../../public/icons/heart";
import OptionsIcon from "../../../public/icons/options";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { getTextColor } from "@/utils/color-helpers";
import { ColorPicker } from "./Picker";
import { CheckIcon } from "../../../public/icons/check";
import { copyTextToClipboard } from "@/utils/copy";

const ColorPalatte = ({
  cellIndex,
  colors,
  focusedColorParent,
  setParentFocusedColor,
}: {
  cellIndex: number;
  colors: string[];
  focusedColorParent: number;
  setParentFocusedColor: (index: number) => void;
}) => {
  const [liked, setLiked] = useState(false);

  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);

  const [focusedColor, setFocusedColor] = useState<number>(-1);

  useEffect(() => {
    if (focusedColorParent !== cellIndex) {
      setFocusedColor(-1);
    }
  }, [focusedColorParent]);

  const handleClick = (index: number, color: string) => {
    if (openPopoverIndex === index && focusedColorParent === cellIndex) {
      setOpenPopoverIndex(null);
      setFocusedColor(-1);
    } else {
      copyTextToClipboard(color);
      setFocusedColor(index);
      setOpenPopoverIndex(index);
      setParentFocusedColor(cellIndex);
    }
  };

  return (
    <div className="flex flex-col md:max-w-[430px] w-full">
      {/* Map All the colors listed in the colors array */}
      <div className="select-none cursor-pointer h-[76px] max-w-full flex items-center justify-center overflow-hidden">
        {colors.map((color, index) => (
          <div
            onClick={() => handleClick(index, color)}
            key={`${color}-${index}`}
            className={`flex flex-1 h-full justify-center items-center overflow-hidden 
            text-sm font-medium group ${index === 0 ? "rounded-l-2xl shadow-[inset_rgba(0,_0,_0,_0.08)_1px_1px,_inset_rgba(0,_0,_0,_0.08)_0_-1px]" : index === colors.length - 1 ? "rounded-r-2xl shadow-[inset_rgba(0,_0,_0,_0.08)_-1px_1px,_inset_rgba(0,_0,_0,_0.08)_0_-1px]" : ""}
            ${focusedColor === index ? "flex-[3] border-2 border-purple-200 px-2" : ""}
            hover:flex-[3] hover:border-2 hover:border-purple-200 hover:px-2 
            focus:flex-[3] focus:border-2 focus:border-purple-200 focus:px-2 focus:outline-none
            transition-all duration-300 ease-in-out
            user-select-none`}
            style={{ backgroundColor: color }}
          >
            <Popover
              open={openPopoverIndex === index}
              onOpenChange={(open) => setOpenPopoverIndex(open ? index : null)}
            >
              <PopoverTrigger asChild>
                <p
                  className={`text-[0px] font-medium 
              transition-[font-size] duration-300 
              group-hover:text-sm group-focus:text-sm
              flex items-center gap-1
              ${focusedColor === index ? "!text-sm" : ""}`}
                  style={{ color: getTextColor(color) }}
                >
                  {focusedColor === index ? (
                    <>
                      <CheckIcon /> Copied
                    </>
                  ) : (
                    color
                  )}
                </p>
              </PopoverTrigger>
              <PopoverContent
                className="w-72 border shadow-md p-4 bg-white rounded-xl min-w-fit z-55"
                align="center"
                side="bottom"
                sideOffset={32}
                avoidCollisions={true}
                collisionPadding={10}
                onClick={(e) => e.stopPropagation()}
              >
                <ColorPicker
                  palatteColor={color}
                  cellIndex={cellIndex}
                  colorIndex={index}
                />
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>

      {/* Display actions for the user */}
      <div className="flex gap-2 mt-1 ml-auto items-center">
        {/* Like Button */}
        <button
          className="flex items-center justify-center gap-1 p-1 rounded-lg text-xs font-normal bg-beige-100 text-beige-600 border-none bg-purple-50"
          onClick={() => setLiked(!liked)}
          aria-label="Like Color Palette"
        >
          <HeartIcon color={liked ? "#ff7061" : ""} />
          <p className="text-stone-600 text-xs">45</p>
        </button>

        {/* Eye Button */}
        <button
          className="hover:bg-purple-50 rounded-[2px] p-1"
          aria-label="Visualize Palette"
        >
          <EyeIcon />
        </button>

        {/* Options Button */}
        <button
          type="button"
          aria-label="More Options"
          className="hover:bg-purple-50 rounded-[2px] p-1"
        >
          <OptionsIcon />
        </button>
      </div>
    </div>
  );
};

export default ColorPalatte;
