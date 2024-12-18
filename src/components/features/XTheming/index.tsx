'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";

function FeatureXTheming() {
  const isOpen = getNavigationStateOf("xtheme")

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[270px]`}>
      <div className="bg-yellow-700 text-white relative h-full flex">
        XTheming Components
      </div>
    </div>
  );
}

export default FeatureXTheming;
