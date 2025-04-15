import React, { useState, useRef, useEffect } from "react";
import LeftArrowButton from "../../../public/icons/left-arrow-button";
import RightArrowButton from "../../../public/icons/right-arrow-button";
import { singleColors } from "@/constants/data";
import useStore from "@/hooks/zustand/useStore";
import { ColorInfo } from "@/types/common";

const ColorSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  const setSelectedShade = useStore((state) => state.setSelectedShade);

  const checkForScrollPosition = (): void => {
    const slider = sliderRef.current;
    if (!slider) return;

    setShowLeftArrow(slider.scrollLeft > 0);

    setShowRightArrow(
      slider.scrollWidth > slider.clientWidth &&
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth
    );
  };

  const scrollLeft = (): void => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = (): void => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    checkForScrollPosition();
    slider.addEventListener("scroll", checkForScrollPosition);
    window.addEventListener("resize", checkForScrollPosition);

    return () => {
      slider.removeEventListener("scroll", checkForScrollPosition);
      window.removeEventListener("resize", checkForScrollPosition);
    };
  }, []);

  return (
    <div className="w-full flex items-center p-2 bg-white z-[1] relative">
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center text-sm leading-5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-purple-50 active:bg-purple-100 absolute left-1 bg-white w-9 h-9 rounded-full border-[1.5px] border-purple-300"
          aria-label="Scroll left"
        >
          <LeftArrowButton />
        </button>
      )}

      <div
        ref={sliderRef}
        className="no-scrollbar w-full flex gap-4 overflow-x-auto py-1 scrollbar-hide"
        onScroll={checkForScrollPosition}
      >
        {singleColors.map(({ name, hex, slug }: ColorInfo) => (
          <a
            key={slug}
            className="shadow-none text-black bg-[#f9f7f6] text-sm font-normal flex items-center gap-1.5 pl-1.5 pr-2.5 h-10 rounded-lg hover:bg-purple-50 cursor-pointer flex-shrink-0"
            onClick={() => setSelectedShade(name)}
          >
            <div
              style={{ backgroundColor: hex }}
              className="w-6 h-6 rounded-[4px]"
            />
            <p>{name}</p>
          </a>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="flex items-center justify-center text-sm leading-5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-purple-300 hover:bg-purple-50 active:bg-purple-100 absolute right-1 bg-white w-9 h-9 rounded-full border-[1.5px] border-purple-300"
          aria-label="Scroll right"
        >
          <RightArrowButton />
        </button>
      )}
    </div>
  );
};

export default ColorSlider;
