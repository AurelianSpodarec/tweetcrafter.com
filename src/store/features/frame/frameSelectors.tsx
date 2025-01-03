'use client';

import { useSelector } from "react-redux";
import { IFrameState } from "./IFrame";

export const getFrameSelectedBackgroundColor = () => {
  return useSelector((state: { frame: IFrameState }) => {
    return state.frame.backgroundColor;
  });
};
