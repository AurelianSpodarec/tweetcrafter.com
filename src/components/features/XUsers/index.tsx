'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";
import dataXUsers from "./dataXUsers";

function ItemUser({ item }) {
  return (
    <div className="flex overflow-hidden">
      <img src={item.profile_image_url} className="w-12 h-12 mr-2 rounded-lg" />
      <div className="flex flex-col">
        <span className="font-medium">{item.name}</span>
        <span className="text-sm truncate">{item.description}</span>
      </div>
    </div>
  )
}

function FeatureXUsers() {
  const isOpen = getNavigationStateOf("xusers")

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[270px]`}>
      <div className="bg-[#0c0e11] relative h-full flex">
        <div className="overflow-auto px-4 my-4 space-y-4">
          {dataXUsers.map((item) => <ItemUser key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default FeatureXUsers;
