import React, { createContext, useContext, useState } from "react";

interface MyContextValue {
  sidebarIndex?: number;
  setSidebarIndex?: (e: any) => void;
}

export const SidebarContext = createContext<MyContextValue | undefined>(
  undefined
);

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarIndex, setSidebarIndex] = useState(0);

  const contextValue: MyContextValue = {
    sidebarIndex,
    setSidebarIndex,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
