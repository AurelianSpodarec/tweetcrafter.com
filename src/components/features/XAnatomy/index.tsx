'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useDispatch } from "react-redux";
import { menuClose } from "@/store/features/navigation/navigationSlice";


const nav = [
  {
    id: "",
    name: "Profile",
    children: [
      {
        name: "Default"
        // Company, User, etc
      },
      {
        name: "Suspended",
      },
      {
        name: "Blocked"
      },
      {
        name: "Hiring"
      }
    ]
    // Suspended, Blocked
  },
  {
    id: "",
    name: "Tweet",
    children: [
      {
        name: "Reply",
      },
      {
        name: "Stats"
      },
      {
        name: "Reposted" // with thouhts and just reposted
      },
      {
        name: "With Images"
      },
      {
        name: "Context"
      }
    ]
  }
]

function FeatureXAnatomy() {
  const isOpen = getNavigationStateOf("xanatomy")
  const dispatch = useDispatch()

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(menuClose("xanatomy"))}>
      <DialogContent className="w-[790px] bg-[#0c0e11]">
        
        <div className="flex items-center justify-between overflow-auto w-full">
          <aside>
            Navigation
          </aside>
          <section>
            MDX maybe?
          </section>
          <aside>
            Nav
          </aside>
        </div>

      </DialogContent>
    </Dialog>
  );
}

export default FeatureXAnatomy;
