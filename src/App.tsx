import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  LoadingContextProvider,
  SidebarContextProvider,
  SlideMenuContextProvider,
} from "./context";
import router from "./routes";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    let timer1 = setTimeout(() => setShow(false), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  // const [isShowing, setShowing] = useState(false);
  const isIOS = navigator.userAgent.match(/OS/i) != null;
  if (isIOS) document.body.classList.add("ios-status-bar");
  return (
    <LoadingContextProvider>
      <SlideMenuContextProvider>
        <SidebarContextProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </SidebarContextProvider>
      </SlideMenuContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
