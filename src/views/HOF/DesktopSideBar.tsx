import { StylesIcon } from "../../../public/icons/styles";
import { FlashIcon } from "../../../public/icons/flash";
import { ThumbIcon } from "../../../public/icons/thumb";
import { MOBILE_NAVIGATIONS } from "@/types/enums";
import useStore from "@/hooks/zustand/useStore";
import RightArrowButton from "../../../public/icons/right-arrow-button";

export default function DesktopSideBar() {
  const { selectedNav, setSelectedNav } = useStore((state) => state);

  return (
    <div
      className="max-md:hidden block bg-white md:border-b-0 h-screen pt-5 min-w-[210px] px-4"
      style={{ position: "sticky", top: 0 }}
    >
      <div className="w-full md:max-h-full md:w-auto">
        <div className="relative overflow-hidden">
          <div className="flex flex-col select-none gap-2">
            <a
              onClick={() => {
                setSelectedNav(MOBILE_NAVIGATIONS.POPULAR);
              }}
              className={`flex gap-2 hover:bg-purple-50 text-dark-300 
            py-[10px] px-4 w-full items-center justify-start rounded-lg 
            border border-transparent transition-colors hover:bg-purple-50 cursor-pointer
            ${selectedNav === MOBILE_NAVIGATIONS.POPULAR ? "bg-[#f1effd]" : ""}`}
            >
              <ThumbIcon />
              <p className="text-sm font-normal">Popular</p>
            </a>
            <a
              onClick={() => setSelectedNav(MOBILE_NAVIGATIONS.NEW)}
              className={`flex gap-2 hover:bg-purple-50 text-dark-300 py-[10px]
            px-4 w-full items-center justify-start rounded-lg border cursor-pointer 
            border-transparent transition-colors
            ${selectedNav === MOBILE_NAVIGATIONS.NEW ? "bg-[#f1effd]" : ""}`}
            >
              <FlashIcon />
              <p className="text-sm font-normal">New</p>
            </a>
            <div className="border-t pb-1 pt-2">
              <div className="cursor-pointer select-none flex gap-2 text-dark-300 py-[10px] px-4 w-full items-center justify-between text-sm font-normal rounded-lg transition-all">
                <div className="flex gap-2 items-center text-start">
                  <StylesIcon />
                  Styles
                </div>
                <RightArrowButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
