// store/useStore.ts
import { ColorShades } from "@/types/common";
import { MOBILE_NAVIGATIONS } from "@/types/enums";
import { create } from "zustand";

interface StoreState {
  shades: ColorShades;
  setShades: (shades: ColorShades) => void;
  updateShadeColor: (
    shadeIndex: number,
    colorIndex: number,
    newColor: string
  ) => void;
  seletectShade: string;
  setSelectedShade: (index: string) => void;
  selectedNav: MOBILE_NAVIGATIONS;
  setSelectedNav: (nav: MOBILE_NAVIGATIONS) => void;
}

const useStore = create<StoreState>((set) => ({
  shades: [],
  setShades: (shades: any) => set(() => ({ shades })),
  updateShadeColor: (
    shadeIndex: number,
    colorIndex: number,
    newColor: string
  ) =>
    set((state) => {
      const updatedShades = [...state.shades];
      if (
        updatedShades[shadeIndex] &&
        updatedShades[shadeIndex][colorIndex] !== undefined
      ) {
        const updatedShade = [...updatedShades[shadeIndex]];
        updatedShade[colorIndex] = newColor;
        updatedShades[shadeIndex] = updatedShade;
        return { shades: updatedShades };
      }
      return { shades: state.shades };
    }),
  seletectShade: "",
  setSelectedShade: (shade: string) => set(() => ({ seletectShade: shade })),
  selectedNav: MOBILE_NAVIGATIONS.POPULAR,
  setSelectedNav: (nav: MOBILE_NAVIGATIONS) =>
    set(() => ({ selectedNav: nav })),
}));

export default useStore;
