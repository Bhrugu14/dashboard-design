import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useLoadingContext } from "../../context";

export const Home = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoadingContext();

  const onChangeLocation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/other");
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full h-full p-8">
      <label className="title">HOME</label>
      <Button
        title={"GO TO OTHER Screen"}
        icon={undefined}
        disabled={undefined}
        onClick={() => onChangeLocation()}
        extraClass={"w-full max-w-2xl"}
      />
      <Button
        title={"GO TO OTHER Screen"}
        icon={undefined}
        disabled={undefined}
        onClick={() => onChangeLocation()}
        extraClass={"w-full max-w-2xl"}
      />
    </div>
  );
};
