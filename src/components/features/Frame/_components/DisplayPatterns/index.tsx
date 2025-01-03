function DisplayPatterns() {
  return (
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
                  {pattern.icon}
                  {pattern.name}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayPatterns
