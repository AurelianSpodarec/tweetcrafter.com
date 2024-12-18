'use client'

import { useDispatch } from "react-redux"
import settingsMenu from "./settingsMenu"

import { menuOpen } from "@/store/features/navigation/navigationSlice"
import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors"

import FeatureDecoration from "@/components/features/Decoration"
import FeatureXTheming from "@/components/features/XTheming"
import FeatureXTypes from "@/components/features/XTypes"
import FeatureXUsers from "@/components/features/XUsers"

function NavItem({ item }: { item: any }) {
  const dispatch = useDispatch()
  const isActive = getNavigationStateOf(item.id)

  return (
    <button type="button" onClick={() => dispatch(menuOpen(item.id))} className="w-[55px] h-[55px] hover:bg-gray-200/20 cursor-default">
      <div className="flex flex-col align-center justify-center items-center">
        <div className="h-6 w-6">
          {item.icon}
        </div>
        <span className="text-[11px]">
          {item.name}
        </span>
      </div>
    </button>
  )
}

function Navigation() {
  return (
    <>
      <aside className="bg-red-500 w-[55px] z-10">
        <div className="flex flex-cols justify-between">
          <div>
            {settingsMenu.menu.map((item) => <NavItem item={item} key={item.id} />)}
          </div>
        </div>
      </aside>

      <FeatureXTypes />
      <FeatureXUsers />
      <FeatureXTheming />
      <FeatureDecoration />
    </>
  )
}

export default Navigation
