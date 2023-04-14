import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen min-w-full bg-background">
      <div className="flex p-4 items-center justify-center pt-20">
        <label
          onClick={() => navigate("/")}
          className="text-center font-bold text-xl cursor-pointer text-blue-700"
        >
          Go To Home
        </label>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 animate-ping ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  );
};