import { CSSProperties, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

const cx = classNames.bind(styles);
type Props = {
  children: string | number | ReactNode;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  link?: boolean;
  transparent?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
  success?: boolean;
  disabled?: boolean
};
const Button = ({
  children,
  className,
  primary,
  secondary,
  link,
  transparent,
  style,
  onClick,
  success,
  disabled
}: Props) => {
  const buttonClassName = cx(
    "commonStyle",
    {
      primary,
      secondary,
      link,
      transparent,
      success,
      disabled,
    },
    className
  );
  return (
    <button disabled={disabled} onClick={onClick} style={style} className={buttonClassName}>
      {children}
    </button>
  );
};
const defaultProps = {
  primary: true,
};
Button.defaultProps = defaultProps;
export default Button;
