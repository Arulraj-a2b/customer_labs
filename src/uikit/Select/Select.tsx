import Flex from "../Flex/Flex";
import classNames from "classnames/bind";
import styles from "./select.module.css";
import Button from "../Button/Button";
import Indicator, { indicatorColor } from "../Indicator/Indicator";

const cx = classNames.bind(styles);
export type list = {
  [key: string]: any;
};
type Props = {
  indicatorColor?: indicatorColor;
  idkey?: string;
  namekey?: string;
  options?: list[];
  removeOnClick?: () => void;
  removeDisabled?: boolean;
  onChange?:any;
  placeholder?:string;
};
const Select = ({
  indicatorColor,
  namekey,
  idkey,
  options,
  removeOnClick,
  removeDisabled,
  onChange,
  placeholder
}: Props) => {
  return (
    <Flex row center className={cx("selectTagContainer")}>
      <Indicator color={indicatorColor} className={styles.indicatorStyle} />
      <select placeholder={placeholder} onChange={onChange} className={cx("selectStyle")} name={namekey} id={idkey}>
        {options &&
          options.map((list) => {
            return <option value={list.value}>{list.name}</option>;
          })}
      </select>
      <Button disabled={removeDisabled} onClick={removeOnClick} className={styles.btnStyle}>
        <div className={styles.hrLine} />
      </Button>
    </Flex>
  );
};

export default Select;
