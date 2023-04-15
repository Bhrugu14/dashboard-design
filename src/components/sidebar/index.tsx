import React, { useState } from "react";
import { IcHelp, Logo } from "./constant";
import { useSidebarContext } from "../../context";
import { Button } from "../button";
import { routesData } from "../../routes/constant";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { sidebarIndex, setSidebarIndex } = useSidebarContext();
  return (
    <div className="w-[17.5%] h-full flex bg-white rounded-lg pt-7 flex-col justify-between">
      <div>
        <div className="flex items-center mb-9 px-4">
          <img
            src={Logo}
            className="h-10 w-10 border rounded-full overflow-hidden border-stone-200 p-1"
            alt=""
          />
          <span className="text-xs ml-2">A. T. Inks</span>
        </div>
        <div className="flex flex-col px-3 w-full">
          {routesData.map((i, k) => {
            const Icon = i.icon;
            return (
              <div
                key={"menu" + k}
                className={`cursor-pointer h-5 flex items-center px-5 py-6 w-full ${
                  sidebarIndex === k && "bg-primaryDull"
                } rounded-lg`}
                onClick={() => {
                  navigate(i.path);
                  setSidebarIndex(k);
                }}
              >
                <Icon
                  height={"20px"}
                  fill={
                    sidebarIndex === k
                      ? "rgba(180,50,50,1)"
                      : "rgba(186, 186, 186, 1)"
                  }
                />
                <span
                  className={`text-xs ${
                    sidebarIndex === k ? "text-primary" : "text-greyOut"
                  } ml-3`}
                >
                  {i.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-4 border rounded-lg p-2 px-8 flex mb-4 items-center justify-center flex-col">
        <img src={IcHelp} className="h-7 w-7" alt="" />
        <span className={`text-xs text-stone-900`}>{"Need Help?"}</span>
        <span className={`text-xs text-stone-900 mt-2 text-center mb-3`}>
          {"Our support team is at your disposal"}
        </span>
        <Button
          onClick={function (e: any): void {
            throw new Error("Function not implemented.");
          }}
          title={"Get Help"}
        />
      </div>
    </div>
  );
};
