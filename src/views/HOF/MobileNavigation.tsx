import { MOBILE_NAVIGATIONS } from "@/types/enums";
import { FlashIcon } from "../../../public/icons/flash";
import { ThumbIcon } from "../../../public/icons/thumb";
import useStore from "@/hooks/zustand/useStore";

const MobileNavigation = () => {
  const { selectedNav, setSelectedNav } = useStore((state) => state);

  return (
    <nav className="select-none md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0px_4px_32px_0px_rgba(0,_0,_0,_0.08)] border-t border-t-beige-100">
      <ul className="flex gap-4 px-4 py-3 justify-between">
        <li
          onClick={() => setSelectedNav(MOBILE_NAVIGATIONS.POPULAR)}
          className="flex-1"
        >
          <a
            className={`flex gap-1 h-max ${selectedNav === MOBILE_NAVIGATIONS.POPULAR ? "bg-purple-50" : ""} hover:bg-purple-50 text-dark-300 py-2.5 flex-col px-4 w-full items-center rounded-md border border-transparent transition-colors`}
          >
            <ThumbIcon />
            <p className="text-sm font-normal">Popuplar</p>
          </a>
        </li>
        <li
          onClick={() => setSelectedNav(MOBILE_NAVIGATIONS.NEW)}
          className="flex-1"
        >
          <a
            className={`flex gap-1 h-max ${selectedNav === MOBILE_NAVIGATIONS.NEW ? "bg-purple-50" : ""} hover:bg-purple-50 text-dark-300 py-2.5 flex-col px-4 w-full items-center rounded-md border border-transparent transition-colors`}
          >
            <FlashIcon />
            <p className="text-sm font-normal">New</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
