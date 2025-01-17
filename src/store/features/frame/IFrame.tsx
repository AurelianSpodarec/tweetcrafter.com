import IColor from "@/components/features/Frame/_components/DisplayColors/IColor"
import { IGradient } from "@/components/features/Frame/_components/DisplayGradients/IGradient"
import { IPattern } from "@/components/features/Frame/_components/DisplayPatterns/IPattern"

export interface IFrameState {
  pattern: IPattern,
  backgroundColor: IColor,
  gradientType: IGradient
}
