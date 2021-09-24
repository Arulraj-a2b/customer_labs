import { CSSProperties, ReactChild } from "react";
import classNames from "classnames/bind";
import styles from "./flex.module.css";

const cx = classNames.bind(styles);

type Props = {
  children: ReactChild;
  row?: boolean;
  column?: boolean;
  className?: string;
  between?: boolean;
  around?: boolean;
  reverse?: boolean;
  columnReverse?: boolean;
  start?: boolean;
  end?: boolean;
  top?: boolean;
  center?: boolean;
  middle?: boolean;
  bottom?: boolean;
  wrap?: boolean;
  noWrap?: boolean;
  style?: CSSProperties;
};

const Flex = ({
  children,
  column,
  className,
  center,
  row,
  between,
  around,
  top,
  bottom,
  columnReverse,
  reverse,
  start,
  end,
  wrap,
  noWrap,
  middle,
  style,
}: Props) => {
  const textClassName = cx(
    {
      row,
      center,
      column: true,
      between,
      around,
      top,
      bottom,
      columnReverse,
      reverse,
      start,
      end,
      wrap,
      noWrap,
      middle,
    },
    className
  );
  return (
    <div style={style} className={textClassName}>
      {children}
    </div>
  );
};

export default Flex;
