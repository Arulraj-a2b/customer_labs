import { CSSProperties, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./text.module.css";

const cx = classNames.bind(styles);
type textSize =
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40;

type textColors = "black" | "white";
type Props = {
  children: ReactNode;
  size?: textSize;
  color?: textColors;
  className?: String;
  align?: "center" | "right" | "left";
  bold?: boolean;
  style?: CSSProperties;
};

const Text = ({
  children,
  size,
  className,
  bold,
  align,
  color,
  style,
}: Props) => {
  const textClassName = cx(
    {
      [`text-${size}`]: size,
      bold,
      [`textAlign-${align}`]: align,
      [`textColor-${color}`]: color,
    },
    className
  );
  return (
    <span style={style} className={textClassName}>
      {children}
    </span>
  );
};

const defaultProps = {
  size: 16,
};
Text.defaultProps = defaultProps;
export default Text;
