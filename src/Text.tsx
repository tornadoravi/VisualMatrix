import * as React from "react";

interface ITextProps {
  color: string;
  fontSize: string;
  fontFamily: string;
  opacity?: string;
  className?: string;
  x: number;
  y: number;
  dx?: string;
  dy?: string;
  onMouseOver?: React.MouseEventHandler;
  onMouseOut?: React.MouseEventHandler;
  transform?: string;
  fontWeight?: string | number;
  textDecoration?: string;
  fontStyle?: string;
  textAnchor?: string;
  text: string | string[];
  title?: string;
  dominantBaseline?: string;
  width?: number;
}

const Text = (props: ITextProps) => {
  const {
    color,
    fontSize,
    fontFamily,
    fontWeight,
    textDecoration,
    fontStyle,
    opacity,
    className,
    x,
    y,
    dx,
    dy,
    textAnchor,
    dominantBaseline,
    text,
    title,
    transform,
    onMouseOver,
    onMouseOut,
    width
  } = props;
  const handleMouseOver = onMouseOver;
  const handleMouseOut = onMouseOut;
  return (
    <text
      className={className}
      x={x}
      y={y}
      fill={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
      fontStyle={fontStyle}
      dx={dx}
      dy={dy}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      textAnchor={textAnchor}
      transform={transform}
      opacity={opacity}
      dominantBaseline={dominantBaseline}
      width={width}
    >
      <title>{title}</title>
      {text}
    </text>
  );
};

export default Text;
