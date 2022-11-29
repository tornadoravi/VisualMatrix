import * as React from "react";

interface IRectProps {
  color: string;
  borderColor?: string;
  borderWidth?: string;
  opacity?: number;
  className?: string;
  x: number;
  y: number;
  height: number;
  width: number;
  chartType?: any;
  onClick?: React.MouseEventHandler;
  onMouseOver?: React.MouseEventHandler;
  onMouseOut?: React.MouseEventHandler;
  transform?: string;
}
const Rect = (props: IRectProps) => {
  const {
    color,
    borderColor,
    borderWidth,
    opacity,
    className,
    x,
    y,
    height,
    width,
    transform,
    chartType,
    onClick,
    onMouseOver,
    onMouseOut
  } = props;
  const isDiamondType = false;
  const style: React.CSSProperties = {
    fill: color,
    stroke: borderColor,
    strokeWidth: borderWidth,
    opacity: opacity === undefined ? 1 : opacity,
    // transform: isDiamondType ? "rotate(45deg)" : null,
    // transformOrigin: isDiamondType ? "center" : null,
    // transformBox: isDiamondType ? "fill-box" : null
  };
  const updatedWidth = width < 0 ? width * -1 : width;
  return (
    <rect
      className={className}
      x={x}
      y={y}
      style={style}
      width={updatedWidth}
      height={height}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
      transform={transform}
    />
  );
};

export default Rect;
