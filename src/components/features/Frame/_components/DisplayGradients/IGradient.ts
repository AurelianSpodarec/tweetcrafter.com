export interface IGradientColor {
  color: string
  position: string
}

export interface IGradient {
  type: "linear" | "radial" | "conic"
  name: string
  colors: IGradientColor[]
  angle?: string
  shape?: string
  position?: string
}
