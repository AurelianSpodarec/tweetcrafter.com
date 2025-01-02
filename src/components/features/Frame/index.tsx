'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";


// Frame Colors
// Frame Patterns (mix with colors)
// Frame Gradients
// Wallpapers/images
// Gutter: Padding, inset, picture 
// Frame border
// Frame Watermark

interface IDefaultObject {
  [key: string]: any
}

interface IFrame {
  [key: string]: {
    default: IDefaultObject,
    [key: string]: any
  }
}

// const frame: IFrame = {
//   colors: {
//     default: {
//       name: "Default",
//       colors: [
//         slate: '#64748b',
//         gray: '#6b7280',
//         zinc: '#71717a',
//         neutral: '#737373',
//         stone: '#78716c',
//         red: '#ef4444',
//         orange: '#f97316',
//         amber: '#f59e0b',
//         yellow: '#eab308',
//         lime: '#84cc16',
//         green: '#22c55e',
//         emerald: '#10b981',
//         teal: '#14b8a6',
//         cyan: '#06b6d4',
//         sky: '#0ea5e9',
//         blue: '#3b82f6',
//         indigo: '#6366f1',
//         violet: '#8b5cf6',
//         purple: '#a855f7',
//         fuchsia: '#d946ef',
//         pink: '#ec4899',
//         rose: '#f43f5e'
//       ]
//     },
//     friend: {
//       name: "Some Palette",
//       colors: [
//         some: '#fff'
//       ]
//     }
//   },
//   gradients: {
//     default: {

//     }
//   },
//   patterns: {
//     default: {

//     }
//   },
//   wallpaper: {
//     default: {

//     }
//   }
// }

// interface IColor {
//   name: string;
//   hex: string;
// }

// interface IDefaultObject {
//   name: string;
//   colors: IColor[]; // Array of colors with metadata
// }

// interface IFrameItem {
//   default: IDefaultObject;
//   [key: string]: IDefaultObject; // Allow other named palettes
// }

// interface IFrame {
//   [key: string]: IFrameItem;
// }

// const frame: IFrame = {
//   colors: {
//     default: {
//       name: "Default",
//       colors: [
//         { name: "slate", hex: "#64748b" },
//         { name: "gray", hex: "#6b7280" },
//         { name: "zinc", hex: "#71717a" },
//         { name: "neutral", hex: "#737373" },
//         { name: "stone", hex: "#78716c" },
//         { name: "red", hex: "#ef4444" },
//         { name: "orange", hex: "#f97316" },
//         { name: "amber", hex: "#f59e0b" },
//         { name: "yellow", hex: "#eab308" },
//         { name: "lime", hex: "#84cc16" },
//         { name: "green", hex: "#22c55e" },
//         { name: "emerald", hex: "#10b981" },
//         { name: "teal", hex: "#14b8a6" },
//         { name: "cyan", hex: "#06b6d4" },
//         { name: "sky", hex: "#0ea5e9" },
//         { name: "blue", hex: "#3b82f6" },
//         { name: "indigo", hex: "#6366f1" },
//         { name: "violet", hex: "#8b5cf6" },
//         { name: "purple", hex: "#a855f7" },
//         { name: "fuchsia", hex: "#d946ef" },
//         { name: "pink", hex: "#ec4899" },
//         { name: "rose", hex: "#f43f5e" },
//       ],
//     },
//     friend: {
//       name: "Some Palette",
//       colors: [
//         { name: "some", hex: "#fff" },
//       ],
//     },
//   },
//   "gradients": {
//     "default": {
//       name: "Default Gradients",
//       "gradients": [
//         {
//           "type": "linear",
//           name: "Sunset",
//           "colors": [
//             { "color": "#ff7e5f", "position": "0%" },
//             { "color": "#feb47b", "position": "100%" }
//           ],
//           "angle": "45deg"
//         },
//         {
//           "type": "radial",
//           name: "Ocean Breeze",
//           "colors": [
//             { "color": "#76b2fe", "position": "0%" },
//             { "color": "#b69efe", "position": "100%" }
//           ],
//           "shape": "ellipse",
//           "position": "center"
//         },
//         {
//           "type": "conic",
//           name: "Rainbow Spin",
//           "colors": [
//             { "color": "#f00", "position": "0%" },
//             { "color": "#ff0", "position": "20%" },
//             { "color": "#0f0", "position": "40%" },
//             { "color": "#00f", "position": "60%" },
//             { "color": "#f0f", "position": "80%" },
//             { "color": "#f00", "position": "100%" }
//           ],
//           "angle": "from 0deg",
//           "position": "center"
//         }
//       ]
//     }
//   }
// };


interface IColor {
  name: string;
  hex: string;
}

interface IGradientColor {
  color: string;
  position: string;
}

interface IGradient {
  type: "linear" | "radial" | "conic";
  name: string;
  colors: IGradientColor[];
  angle?: string; // For linear and conic gradients
  shape?: string; // For radial gradients
  position?: string; // Starting position for radial and conic gradients
}

interface IDefaultObject {
  name: string;
  colors?: IColor[]; // Array of colors for color palettes
  gradients?: IGradient[]; // Array of gradients for gradient palettes
}

interface IFrameItem {
  default: IDefaultObject;
  [key: string]: IDefaultObject; // Allow other named palettes
}

interface IFrame {
  [key: string]: IFrameItem;
}

const frame: IFrame = {
  colors: {
    default: {
      name: "Default",
      colors: [
        { name: "slate", hex: "#64748b" },
        { name: "gray", hex: "#6b7280" },
        { name: "zinc", hex: "#71717a" },
        { name: "neutral", hex: "#737373" },
        { name: "stone", hex: "#78716c" },
        { name: "red", hex: "#ef4444" },
        { name: "orange", hex: "#f97316" },
        { name: "amber", hex: "#f59e0b" },
        { name: "yellow", hex: "#eab308" },
        { name: "lime", hex: "#84cc16" },
        { name: "green", hex: "#22c55e" },
        { name: "emerald", hex: "#10b981" },
        { name: "teal", hex: "#14b8a6" },
        { name: "cyan", hex: "#06b6d4" },
        { name: "sky", hex: "#0ea5e9" },
        { name: "blue", hex: "#3b82f6" },
        { name: "indigo", hex: "#6366f1" },
        { name: "violet", hex: "#8b5cf6" },
        { name: "purple", hex: "#a855f7" },
        { name: "fuchsia", hex: "#d946ef" },
        { name: "pink", hex: "#ec4899" },
        { name: "rose", hex: "#f43f5e" },
      ],
    },
    // friend: {
    //   name: "Some Palette",
    //   colors: [{ name: "some", hex: "#fff" }],
    // },
  },
  gradients: {
    default: {
      name: "Default Gradients",
      gradients: [
        {
          type: "linear",
          name: "Sunset",
          colors: [
            { color: "#ff7e5f", position: "0%" },
            { color: "#feb47b", position: "100%" },
          ],
          angle: "45deg",
        },
        {
          type: "radial",
          name: "Ocean Breeze",
          colors: [
            { color: "#76b2fe", position: "0%" },
            { color: "#b69efe", position: "100%" },
          ],
          shape: "ellipse",
          position: "center",
        },
        {
          type: "conic",
          name: "Rainbow Spin",
          colors: [
            { color: "#f00", position: "0%" },
            { color: "#ff0", position: "20%" },
            { color: "#0f0", position: "40%" },
            { color: "#00f", position: "60%" },
            { color: "#f0f", position: "80%" },
            { color: "#b69efe", position: "100%" },
          ],
          angle: "from 0deg",
          position: "center",
        },
      ],
    },
  },
  patterns: {
    default: {
      name: "Patters",
      patterns: [
        {
          name: "Jigsaw",
          backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E",
          icon: "path/to/icons/jigsaw.svg"
        },
        {
          name: "Overcast",
          backgroundImage: "path/to/background/overcast.svg",
          icon: "path/to/icons/overcast.svg"
        },
        {
          name: "Formal Invitation",
          backgroundImage: "path/to/background/formal-invitation.svg",
          icon: "path/to/icons/formal-invitation.svg"
        },
        {
          name: "Topography",
          backgroundImage: "path/to/background/topography.svg",
          icon: "path/to/icons/topography.svg"
        },
        {
          name: "Texture",
          backgroundImage: "path/to/background/texture.svg",
          icon: "path/to/icons/texture.svg"
        },
        {
          name: "Jupiter",
          backgroundImage: "path/to/background/jupiter.svg",
          icon: "path/to/icons/jupiter.svg"
        },
        {
          name: "Architect",
          backgroundImage: "path/to/background/architect.svg",
          icon: "path/to/icons/architect.svg"
        },
        {
          name: "Cutout",
          backgroundImage: "path/to/background/cutout.svg",
          icon: "path/to/icons/cutout.svg"
        },
        {
          name: "Hideout",
          backgroundImage: "path/to/background/hideout.svg",
          icon: "path/to/icons/hideout.svg"
        },
        {
          name: "Graph Paper",
          backgroundImage: "path/to/background/graph-paper.svg",
          icon: "path/to/icons/graph-paper.svg"
        },
        {
          name: "YYY",
          backgroundImage: "path/to/background/yyy.svg",
          icon: "path/to/icons/yyy.svg"
        },
        {
          name: "Squares",
          backgroundImage: "path/to/background/squares.svg",
          icon: "path/to/icons/squares.svg"
        },
        {
          name: "Falling Triangles",
          backgroundImage: "path/to/background/falling-triangles.svg",
          icon: "path/to/icons/falling-triangles.svg"
        },
        {
          name: "Piano Man",
          backgroundImage: "path/to/background/piano-man.svg",
          icon: "path/to/icons/piano-man.svg"
        },
        {
          name: "Pie Factory",
          backgroundImage: "path/to/background/pie-factory.svg",
          icon: "path/to/icons/pie-factory.svg"
        },
        {
          name: "Dominos",
          backgroundImage: "path/to/background/dominos.svg",
          icon: "path/to/icons/dominos.svg"
        },
        {
          name: "Hexagons",
          backgroundImage: "path/to/background/hexagons.svg",
          icon: "path/to/icons/hexagons.svg"
        },
        {
          name: "Charlie Brown",
          backgroundImage: "path/to/background/charlie-brown.svg",
          icon: "path/to/icons/charlie-brown.svg"
        },
        {
          name: "Autumn",
          backgroundImage: "path/to/background/autumn.svg",
          icon: "path/to/icons/autumn.svg"
        },
        {
          name: "Temple",
          backgroundImage: "path/to/background/temple.svg",
          icon: "path/to/icons/temple.svg"
        },
        {
          name: "Stamp Collection",
          backgroundImage: "path/to/background/stamp-collection.svg",
          icon: "path/to/icons/stamp-collection.svg"
        },
        {
          name: "Death Star",
          backgroundImage: "path/to/background/death-star.svg",
          icon: "path/to/icons/death-star.svg"
        },
        {
          name: "Church on Sunday",
          backgroundImage: "path/to/background/church-on-sunday.svg",
          icon: "path/to/icons/church-on-sunday.svg"
        },
        {
          name: "I Like Food",
          backgroundImage: "path/to/background/i-like-food.svg",
          icon: "path/to/icons/i-like-food.svg"
        },
        {
          name: "Overlapping Hexagons",
          backgroundImage: "path/to/background/overlapping-hexagons.svg",
          icon: "path/to/icons/overlapping-hexagons.svg"
        },
        {
          name: "4 Point Stars",
          backgroundImage: "path/to/background/4-point-stars.svg",
          icon: "path/to/icons/4-point-stars.svg"
        },
        {
          name: "Bamboo",
          backgroundImage: "path/to/background/bamboo.svg",
          icon: "path/to/icons/bamboo.svg"
        },
        {
          name: "Bathroom Floor",
          backgroundImage: "path/to/background/bathroom-floor.svg",
          icon: "path/to/icons/bathroom-floor.svg"
        },
        {
          name: "Cork Screw",
          backgroundImage: "path/to/background/cork-screw.svg",
          icon: "path/to/icons/cork-screw.svg"
        },
        {
          name: "Happy Intersection",
          backgroundImage: "path/to/background/happy-intersection.svg",
          icon: "path/to/icons/happy-intersection.svg"
        },
        {
          name: "Kiwi",
          backgroundImage: "path/to/background/kiwi.svg",
          icon: "path/to/icons/kiwi.svg"
        },
        {
          name: "Lips",
          backgroundImage: "path/to/background/lips.svg",
          icon: "path/to/icons/lips.svg"
        },
        {
          name: "Lisbon",
          backgroundImage: "path/to/background/lisbon.svg",
          icon: "path/to/icons/lisbon.svg"
        },
        {
          name: "Random Shapes",
          backgroundImage: "path/to/background/random-shapes.svg",
          icon: "path/to/icons/random-shapes.svg"
        },
        {
          name: "Steel Beams",
          backgroundImage: "path/to/background/steel-beams.svg",
          icon: "path/to/icons/steel-beams.svg"
        },
        {
          name: "Tiny Checkers",
          backgroundImage: "path/to/background/tiny-checkers.svg",
          icon: "path/to/icons/tiny-checkers.svg"
        },
        {
          name: "X Equals",
          backgroundImage: "path/to/background/x-equals.svg",
          icon: "path/to/icons/x-equals.svg"
        },
        {
          name: "Anchors Away",
          backgroundImage: "path/to/background/anchors-away.svg",
          icon: "path/to/icons/anchors-away.svg"
        },
        {
          name: "Bevel Circle",
          backgroundImage: "path/to/background/bevel-circle.svg",
          icon: "path/to/icons/bevel-circle.svg"
        },
        {
          name: "Brick Wall",
          backgroundImage: "path/to/background/brick-wall.svg",
          icon: "path/to/icons/brick-wall.svg"
        },
        {
          name: "Fancy Rectangles",
          backgroundImage: "path/to/background/fancy-rectangles.svg",
          icon: "path/to/icons/fancy-rectangles.svg"
        },
        {
          name: "Heavy Rain",
          backgroundImage: "path/to/background/heavy-rain.svg",
          icon: "path/to/icons/heavy-rain.svg"
        },
        {
          name: "Overlapping Circles",
          backgroundImage: "path/to/background/overlapping-circles.svg",
          icon: "path/to/icons/overlapping-circles.svg"
        },
        {
          name: "Plus",
          backgroundImage: "path/to/background/plus.svg",
          icon: "path/to/icons/plus.svg"
        },
        {
          name: "Rounded Plus Connected",
          backgroundImage: "path/to/background/rounded-plus-connected.svg",
          icon: "path/to/icons/rounded-plus-connected.svg"
        },
        {
          name: "Volcano Lamp",
          backgroundImage: "path/to/background/volcano-lamp.svg",
          icon: "path/to/icons/volcano-lamp.svg"
        },
        {
          name: "Wiggle",
          backgroundImage: "path/to/background/wiggle.svg",
          icon: "path/to/icons/wiggle.svg"
        },
        {
          name: "Bubbles",
          backgroundImage: "path/to/background/bubbles.svg",
          icon: "path/to/icons/bubbles.svg"
        },
        {
          name: "Cage",
          backgroundImage: "path/to/background/cage.svg",
          icon: "path/to/icons/cage.svg"
        },
        {
          name: "Connections",
          backgroundImage: "path/to/background/connections.svg",
          icon: "path/to/icons/connections.svg"
        },
        {
          name: "Current",
          backgroundImage: "path/to/background/current.svg",
          icon: "path/to/icons/current.svg"
        },
        {
          name: "Diagonal Stripes",
          backgroundImage: "path/to/background/diagonal-stripes.svg",
          icon: "path/to/icons/diagonal-stripes.svg"
        },
        {
          name: "Flipped Diamonds",
          backgroundImage: "path/to/background/flipped-diamonds.svg",
          icon: "path/to/icons/flipped-diamonds.svg"
        },
        {
          name: "Floating Cogs",
          backgroundImage: "path/to/background/floating-cogs.svg",
          icon: "path/to/icons/floating-cogs.svg"
        },
        {
          name: "Glamorous",
          backgroundImage: "path/to/background/glamorous.svg",
          icon: "path/to/icons/glamorous.svg"
        },
        {
          name: "Houndstooth",
          backgroundImage: "path/to/background/houndstooth.svg",
          icon: "path/to/icons/houndstooth.svg"
        },
        {
          name: "Leaf",
          backgroundImage: "path/to/background/leaf.svg",
          icon: "path/to/icons/leaf.svg"
        },
        {
          name: "Lines in Motion",
          backgroundImage: "path/to/background/lines-in-motion.svg",
          icon: "path/to/icons/lines-in-motion.svg"
        },
        {
          name: "Moroccan",
          backgroundImage: "path/to/background/moroccan.svg",
          icon: "path/to/icons/moroccan.svg"
        },
        {
          name: "Morphing Diamonds",
          backgroundImage: "path/to/background/morphing-diamonds.svg",
          icon: "path/to/icons/morphing-diamonds.svg"
        },
        {
          name: "Rails",
          backgroundImage: "path/to/background/rails.svg",
          icon: "path/to/icons/rails.svg"
        },
        {
          name: "Rain",
          backgroundImage: "path/to/background/rain.svg",
          icon: "path/to/icons/rain.svg"
        },
        {
          name: "Skulls",
          backgroundImage: "path/to/background/skulls.svg",
          icon: "path/to/icons/skulls.svg"
        },
        {
          name: "Squares in Squares",
          backgroundImage: "path/to/background/squares-in-squares.svg",
          icon: "path/to/icons/squares-in-squares.svg"
        },
        {
          name: "Stripes",
          backgroundImage: "path/to/background/stripes.svg",
          icon: "path/to/icons/stripes.svg"
        },
        {
          name: "Tic Tac Toe",
          backgroundImage: "path/to/background/tic-tac-toe.svg",
          icon: "path/to/icons/tic-tac-toe.svg"
        },
        {
          name: "Zig Zag",
          backgroundImage: "path/to/background/zig-zag.svg",
          icon: "path/to/icons/zig-zag.svg"
        },
        {
          name: "Aztec",
          backgroundImage: "path/to/background/aztec.svg",
          icon: "path/to/icons/aztec.svg"
        },
        {
          name: "Bank Note",
          backgroundImage: "path/to/background/bank-note.svg",
          icon: "path/to/icons/bank-note.svg"
        },
        {
          name: "Boxes",
          backgroundImage: "path/to/background/boxes.svg",
          icon: "path/to/icons/boxes.svg"
        },
        {
          name: "Circles & Squares",
          backgroundImage: "path/to/background/circles-and-squares.svg",
          icon: "path/to/icons/circles-and-squares.svg"
        },
        {
          name: "Circuit Board",
          backgroundImage: "path/to/background/circuit-board.svg",
          icon: "path/to/icons/circuit-board.svg"
        },
        {
          name: "Curtain",
          backgroundImage: "path/to/background/curtain.svg",
          icon: "path/to/icons/curtain.svg"
        },
        {
          name: "Diagonal Lines",
          backgroundImage: "path/to/background/diagonal-lines.svg",
          icon: "path/to/icons/diagonal-lines.svg"
        },
        {
          name: "Endless Clouds",
          backgroundImage: "path/to/background/endless-clouds.svg",
          icon: "path/to/icons/endless-clouds.svg"
        },
        {
          name: "Eyes",
          backgroundImage: "path/to/background/eyes.svg",
          icon: "path/to/icons/eyes.svg"
        },
        {
          name: "Floor Tile",
          backgroundImage: "path/to/background/floor-tile.svg",
          icon: "path/to/icons/floor-tile.svg"
        },
        {
          name: "Groovy",
          backgroundImage: "path/to/background/groovy.svg",
          icon: "path/to/icons/groovy.svg"
        },
        {
          name: "Intersecting Circles",
          backgroundImage: "path/to/background/intersecting-circles.svg",
          icon: "path/to/icons/intersecting-circles.svg"
        },
        {
          name: "Melt",
          backgroundImage: "path/to/background/melt.svg",
          icon: "path/to/icons/melt.svg"
        },
        {
          name: "Overlapping Diamonds",
          backgroundImage: "path/to/background/overlapping-diamonds.svg",
          icon: "path/to/icons/overlapping-diamonds.svg"
        },
        {
          name: "Parkay Floor",
          backgroundImage: "path/to/background/parkay-floor.svg",
          icon: "path/to/icons/parkay-floor.svg"
        },
        {
          name: "Pixel Dots",
          backgroundImage: "path/to/background/pixel-dots.svg",
          icon: "path/to/icons/pixel-dots.svg"
        },
        {
          name: "Polka Dots",
          backgroundImage: "path/to/background/polka-dots.svg",
          icon: "path/to/icons/polka-dots.svg"
        },
        {
          name: "Signal",
          backgroundImage: "path/to/background/signal.svg",
          icon: "path/to/icons/signal.svg"
        },
        {
          name: "Slanted Stars",
          backgroundImage: "path/to/background/slanted-stars.svg",
          icon: "path/to/icons/slanted-stars.svg"
        },
        {
          name: "Wallpaper",
          backgroundImage: "path/to/background/wallpaper.svg",
          icon: "path/to/icons/wallpaper.svg"
        }
      ]
    }
  }
};


const GradientDisplay = ({ gradients }) => {
  return (
    <div className="">
      {Object.keys(gradients).map((key) => {
        const gradientPalette = gradients[key];
        return (
          <div key={key}>
            <h3 className="font-bold mb-2">{gradientPalette.name}</h3>

            <div className="grid grid-cols-3 gap-2">
              {gradientPalette.gradients.map((gradient) => {
                const gradientColors = gradient.colors
                  .map((color) => color.color)
                  .join(', '); // Join colors for the gradient

                let gradientStyle;
                switch (gradient.type) {
                  case 'linear':
                    gradientStyle = `linear-gradient(${gradient.angle || 'to right'}, ${gradientColors})`;
                    break;
                  case 'radial':
                    gradientStyle = `radial-gradient(${gradient.shape || 'circle'} at ${gradient.position || 'center'}, ${gradientColors})`;
                    break;
                  case 'conic':
                    gradientStyle = `conic-gradient(${gradientColors})`;
                    break;
                  case 'repeating-linear':
                    gradientStyle = `repeating-linear-gradient(${gradient.angle || 'to right'}, ${gradientColors})`;
                    break;
                  default:
                    gradientStyle = '';
                }

                return (
                  <div
                    key={gradient.name}
                    className="w-full h-10 mb-2 rounded-md shadow-md"
                    style={{ background: gradientStyle }}
                  >
                    {/* <div className="flex items-center justify-center h-full text-white font-semibold">
                    {gradient.name}
                  </div> */}
                  </div>
                );
              })}
            </div>

          </div>
        );
      })}
    </div>
  );
};

function FeatureFrame() {
  const isOpen = getNavigationStateOf("frame")

  const colorCategories = Object.entries(frame.colors);
  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[270px]`}>
      <div className="bg-slate-950 text-white relative h-full flex">
        <div className="overflow-auto px-4 space-y-4">

          Frame Components

          <div>
            Colors
            {colorCategories.map(([categoryKey, category]) => (
              <div key={categoryKey} style={{ marginBottom: "20px" }}>
                <h2 className="font-semibold">{category.name} Palette</h2>
                <div className="flex flex-wrap gap-2">
                  {category.colors.map((color, index) => (
                    <div>
                      <div
                        className="h-7 w-7 rounded-full border border-solid border-white border-opacity-[35%]"
                        style={{ backgroundColor: color.hex }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            Gradients
            <GradientDisplay gradients={frame.gradients} />
          </div>

          <div>
            {Object.entries(frame.patterns).map(([categoryKey, category]) => (
              <div key={categoryKey}>
                <h2>{category.name}</h2>
                <div className="grid grid-cols-2">
                  {category.patterns.map((pattern, index) => {
                    console.log(pattern.backgroundImage)
                    return (
                      <div
                        key={index}
                        className="h-32 w-full"
                        style={{ background: `url("${pattern.backgroundImage}")`, backgroundSize: "70px" }}
                      >
                        {pattern.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}

export default FeatureFrame;
