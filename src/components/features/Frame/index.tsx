'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";
import DisplayColors from "./_components/DisplayColors";

interface IDefaultObject {
  [key: string]: any
}






// interface IDefaultObject {
//   name: string;
//   colors?: IColor[]; // Array of colors for color palettes
//   gradients?: IGradient[]; // Array of gradients for gradient palettes
// }

interface IFrameItem {
  default: IDefaultObject;
  [key: string]: IDefaultObject; // Allow other named palettes
}


function FeatureFrame() {
  const isOpen = getNavigationStateOf("frame")

  // const colorCategories = Object.entries(frame.colors);
  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[270px]`}>
      <div className="bg-slate-950 text-white relative h-full flex">
        <div className="overflow-auto px-4 space-y-4">


          <DisplayColors />

        </div>
      </div>
    </div >
  );
}

export default FeatureFrame;
