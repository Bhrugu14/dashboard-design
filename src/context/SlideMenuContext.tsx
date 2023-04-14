import React, { createContext, useContext, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface MyContextValue {
  openSlider?: boolean;
  setOpenSlider?: (e: any) => void;
}

export const SlideMenuContext = createContext<MyContextValue | undefined>(
  undefined
);

export const SlideMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openSlider, setOpenSlider] = useState(true);

  const contextValue: MyContextValue = {
    openSlider,
    setOpenSlider,
  };

  return (
    <SlideMenuContext.Provider value={contextValue}>
      <div
        className={`fixed h-full w-[34%] px-7 py-9 bg-white right-0 z-20 transition-all duration-700 ease-in-out shadow-2xl ${
          openSlider && `translate-x-[100%]`
        }`}
      >
        <div className="flex items-center">
          <div onClick={() => setOpenSlider(false)}>
            <ArrowLeftIcon className="h-6 w-6" />
          </div>
          <span className="text-black font-semibold text-xl ml-4">
            Contacts
          </span>
        </div>
      </div>
      {children}
    </SlideMenuContext.Provider>
  );
};

export const useSlideMenuContext = () => useContext(SlideMenuContext);
