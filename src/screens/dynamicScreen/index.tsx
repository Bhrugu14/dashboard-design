import React from "react";

export const DynamicScreen = ({ title }) => {
  return (
    <div className="flex flex-col w-full h-full p-8">
      <label className="title">{title}</label>
    </div>
  );
};
