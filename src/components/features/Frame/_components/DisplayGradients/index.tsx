
const DisplayGradients = ({ gradients }) => {
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

export default DisplayGradients
