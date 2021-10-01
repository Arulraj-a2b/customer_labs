import classNames from "classnames/bind";
import { CSSProperties } from "react";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import { isEmpty } from "../helpers";
import styles from "./inputtext.module.css";
import { ErrorMessage } from "formik";

const cx = classNames.bind(styles);
type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  label?: string;
  onChange?: any;
  name?: string;
  required?:boolean;
};
const InputText = ({
  onChange,
  className,
  style,
  placeholder,
  value,
  label,
  name,
  required
}: Props) => {
  const flexClassName = cx("inputStyle", {}, className);
  return (
    <Flex>
      {!isEmpty(label) && <Text className={styles.label}>{label}</Text>}
      <input
      required={required}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={flexClassName}
        style={style}
      />
    </Flex>
  );
};

export default InputText;
