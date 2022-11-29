import * as React from "react";

interface ILineProps {
  color: string;
  strokeDash?: string;
  lineWidth: string;
  className?: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  onClick?: React.MouseEventHandler;
  onMouseOver?: React.MouseEventHandler;
  onMouseOut?: React.MouseEventHandler;
}

const Line = (props: ILineProps) => {
  const {
    color,
    strokeDash,
    lineWidth,
    className,
    x1,
    y1,
    x2,
    y2,
    onClick,
    onMouseOver,
    onMouseOut
  } = props;
  const style = {
    stroke: color,
    strokeWidth: lineWidth,
    strokeDasharray: strokeDash
  };

  return (
    <line
      className={className}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
};

export default Line;
