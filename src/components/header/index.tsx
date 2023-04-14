import React, { useState, useEffect } from "react";
import { IcCart, IcSearch, Logo } from "./constant";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "../button";
import { useSlideMenuContext } from "../../context";

export const Header = () => {
  const { setOpenSlider, openSlider } = useSlideMenuContext();
  return (
    <header
      className={`fixed w-full z-10 transition-all duration-200 ease-in-out h-16 flex bg-white items-center px-8`}
    >
      <img src={Logo} className="h-16 overflow-hidden object-cover" alt="" />
      <div className="flex justify-between  ml-[7.5%] flex-1">
        <div className="bg-primaryBg py-2 px-2 rounded-md max-w-[480px] w-full flex items-center">
          <img
            src={IcSearch}
            className="h-5 overflow-hidden object-cover"
            alt=""
          />
          <input
            className={`bg-transparent w-full px-2 text-xs placeholder:text-black`}
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center mr-[1.9%]">
          <Button
            iconLeft={IcCart}
            onClick={function (e: any): void {
              throw new Error("Function not implemented.");
            }}
            title={"Checkout (200)"}
            extraClass="px-5 h-full min-w-fit"
          />
          <div className="flex items-center min-w-fit ml-14 h-full">
            <img
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              className="h-8 rounded-full bg-red-500 overflow-hidden object-cover"
              alt=""
            />
            <span className={`text-xs text-stone-900 text-center mx-4`}>
              {"User Admin"}
            </span>
            <div onClick={() => setOpenSlider(!openSlider)}>
              <ChevronDownIcon className="h-4 w-4 text-black" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
