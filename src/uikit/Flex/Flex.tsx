import { CSSProperties, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./flex.module.css";

const cx = classNames.bind(styles);

type Props = {
  children: ReactNode;
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
  const flexClassName = cx(
    "commonStyle",
    {
      row,
      center,
      column,
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
    <div style={style} className={flexClassName}>
      {children}
    </div>
  );
};
const defaultProps = {
  column: true,
};
Flex.defaultProps = defaultProps;
export default Flex;
