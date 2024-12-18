'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";

import settingsTypes from "./settingsTypes";
import ItemType from "./ItemType";

function FeatureXTypes() {
  const isOpen = getNavigationStateOf("xtypes")

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[270px]`}>
      <div className="bg-yellow-700 text-white relative h-full flex">

        <div className="overflow-auto">
          {settingsTypes.map((item) => <ItemType key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default FeatureXTypes;
