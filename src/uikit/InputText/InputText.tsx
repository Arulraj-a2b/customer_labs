import classNames from "classnames/bind";
import { CSSProperties } from "react";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import { isEmpty } from "../helpers";
import styles from "./inputtext.module.css";

const cx = classNames.bind(styles);
type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  label?: string;
};
const InputText = ({ className, style, placeholder, value, label }: Props) => {
  const flexClassName = cx("inputStyle", {}, className);
  return (
    <Flex>
      {!isEmpty(label) && <Text className={styles.label}>{label}</Text>}
      <input
        value={value}
        placeholder={placeholder}
        className={flexClassName}
        style={style}
      />
    </Flex>
  );
};

export default InputText;
