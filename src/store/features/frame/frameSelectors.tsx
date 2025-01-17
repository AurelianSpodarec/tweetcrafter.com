'use client';

import { useSelector } from "react-redux";
import { IFrameState } from "./IFrame";

export const getFrameSelectedBackgroundColor = () => {
  return useSelector((state: { frame: IFrameState }) => {
    return state.frame.backgroundColor;
  });
};

export const getFrameSelectedPattern = () => {
  return useSelector((state: { frame: IFrameState }) => {
    return state.frame.pattern;
  });
};

export const getFrameGradient = () => {
  return useSelector((state: { frame: IFrameState }) => {
    return state.frame.gradientType;
  });
};
