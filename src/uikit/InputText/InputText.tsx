import classNames from "classnames/bind";
import { CSSProperties } from "react";
import styles from "./flex.module.css";

const cx = classNames.bind(styles);
type Props = {
  className?: string;
  style?: CSSProperties;
};
const InputText = ({ className, style }: Props) => {
  const flexClassName = cx("inputStyle", {}, className);
  return <input className={flexClassName} style={style} />;
};

export default InputText;
