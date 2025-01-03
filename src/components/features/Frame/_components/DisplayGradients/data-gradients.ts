const dataGradients = {
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
}

export default dataGradients
