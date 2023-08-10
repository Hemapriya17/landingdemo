import React from "react";

function Circle({ className, width, height, fill = true, ...props }) {
  const circleStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={`absolute circle ${className} ${
        fill ? "bg-primary" : "bg-[#f7d883]"
      } rounded-full transform hover:translate-x-4 hover:translate-y-4 transition-transform ease-out duration-300`}
      style={circleStyle}
      {...props}
    ></div>
  );
}

export default Circle;
