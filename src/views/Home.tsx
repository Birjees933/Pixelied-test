import ColorPalatte from "@/components/custom/ColorPalette";
import ColorSlider from "./HOF/ColorsSlider";
import DesktopSideBar from "./HOF/DesktopSideBar";
import MobileNavigation from "./HOF/MobileNavigation";
import useStore from "@/hooks/zustand/useStore";
import { useGradients } from "@/hooks/react-query/useGradients";
import { useEffect, useState } from "react";
import { useShades } from "@/hooks/react-query/useShades";
import Spinner from "@/components/custom/Spinner";

const HomeView = () => {
  // Fetch Gradients
  const { data: gradients, isLoading, error } = useGradients();

  //   Get states from Zustand
  const selectedShade = useStore((state) => state.seletectShade);
  const globalShades = useStore((state) => state.shades);
  const setShades = useStore((state) => state.setShades);

  // States
  const [focusedColor, setFocusedColor] = useState<number>(-1);

  //   Fetch Shades
  const {
    data: shades,
    isLoading: isLoadingShades,
    error: errorShades,
  } = useShades(selectedShade);

  //   Flag variable
  const loadingData = isLoading || isLoadingShades;
  // const colorsData = selectedShade === "" ? gradients : shades;

  useEffect(() => {
    setShades(selectedShade === "" ? gradients || [] : shades || []);
  }, [gradients, shades]);

  //   Handle errors
  useEffect(() => {
    console.error("Error in fetching data", error || errorShades);
  }, [error, errorShades]);

  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Desktop Side Bar */}
      <DesktopSideBar />

      <div className="flex flex-col gap-4 md:w-[calc(100vw-226px)] w-full p-2 mb-20 md:mb-0">
        {/* Colors Slider */}
        <ColorSlider />

        {/* Map All the Colors */}
        {loadingData ? (
          <div className="h-[calc(100vh-200px)] md:h-auto flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="mt-0 grid auto-rows-min pb-2 items-center grid-cols-[1fr] md:grid-cols-[repeat(auto-fill,_minmax(278.5px,_1fr))] gap-6 w-full p-2">
            {globalShades?.map((color, index) => (
              <ColorPalatte
                cellIndex={index}
                key={`${index}`}
                colors={color}
                focusedColorParent={focusedColor}
                setParentFocusedColor={setFocusedColor}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNavigation />
    </div>
  );
};

export default HomeView;
