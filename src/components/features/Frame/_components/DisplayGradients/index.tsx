import { useDispatch } from "react-redux";
import { setFrameGradientType } from "@/store/features/frame/frameSlice";
import dataGradients from "./data-gradients";
import { getFrameGradient } from "@/store/features/frame/frameSelectors";

function DisplayGradients() {
  const dispatch = useDispatch()
  const frameGradient = getFrameGradient()

  return (
    <div className="">
      {Object.entries(dataGradients).map(([key, gradientPalette]) => (
        <div key={key}>
          <h3 className="font-bold mb-2">{gradientPalette.name}</h3>

          <div className="grid grid-cols-3 gap-2">
            {gradientPalette.gradients.map((gradient) => {
              const gradientColors = gradient.colors.map((color) => color.color).join(", ");

              let gradientStyle;
              switch (gradient.type) {
                case "linear":
                  gradientStyle = `linear-gradient(${gradient.angle || "to right"}, ${gradientColors})`;
                  break;
                case "radial":
                  gradientStyle = `radial-gradient(${gradient.shape || "circle"} at ${gradient.position || "center"
                    }, ${gradientColors})`;
                  break;
                case "conic":
                  gradientStyle = `conic-gradient(${gradient.angle || "from 0deg"}, ${gradientColors})`;
                  break;
                case "repeating-linear":
                  gradientStyle = `repeating-linear-gradient(${gradient.angle || "to right"}, ${gradientColors})`;
                  break;
                default:
                  gradientStyle = "";
              }

              return (
                <button
                  type="button"
                  key={gradient.name}
                  onClick={() => dispatch(setFrameGradientType(gradient))}
                  className={`w-full h-10 mb-2 rounded-md  ${frameGradient.name === gradient.name ? "shadow-[0px_0px_15px_0px_rgba(232,232,255,0.9)]" : ""}`}
                  style={{ background: gradientStyle }}
                >
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayGradients;

