import React from "react";
import AuthCheckBox from "./AuthCheckBox";

type Props = {
  isChecked: boolean;
  setIsChecked: (value: boolean | ((prev: boolean) => boolean)) => void;
};

export default function RememberMe({ isChecked, setIsChecked }: Props) {
  return (
    <div className="flex items-center gap-2">
      <AuthCheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      <p className="font-medium text-sm text-pLight2">
        Remember me for 30 days
      </p>
    </div>
  );
}
