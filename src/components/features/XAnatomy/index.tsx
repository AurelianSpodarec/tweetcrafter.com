'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";



function FeatureXAnatomy() {
  const isOpen = getNavigationStateOf("xanatomy")

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-1/2 -translate-x-1/2 w-[790px] h-full py-20`}>
      <div className="bg-[#0c0e11] relative h-full flex">
        <div className="overflow-auto px-4 space-y-4 w-full">

          <aside>
            
            X Anatomy

            [close]
          </aside>
          <section>

          </section>

        </div>
      </div>
    </div>
  );
}

export default FeatureXAnatomy;
