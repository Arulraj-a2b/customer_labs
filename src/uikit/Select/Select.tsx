import Flex from "../Flex/Flex";
import classNames from "classnames/bind";
import styles from "./select.module.css";
import Button from "../Button/Button";
import Indicator, { indicatorColor } from "../Indicator/Indicator";
import { InitialValues } from "../../module/Dashboard/AddMore";

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
  onChange?: any;
  placeholder?: string;
  remove: Function;
  index: number;
  setFieldValue: Function;
  values: InitialValues;
  value: string;
  handleInsert: Function
};
const Select = ({
  indicatorColor,
  namekey,
  idkey,
  options,
  removeOnClick,
  removeDisabled,
  onChange,
  placeholder,
  remove,
  setFieldValue,
  index,
  values,
  value,
  handleInsert
}: Props) => {


  return (
    <Flex row center className={cx("selectTagContainer")}>
      <Indicator color={indicatorColor} className={styles.indicatorStyle} />
      <select
        value={value}
        onChange={(event) => {
          if(!values.selectedOptions.includes(event.target.value)){
            const preArray = values.selectedOptions.slice(0, index);
            const nextArray = values.selectedOptions.slice(index + 1);
            const reqArray = [...preArray, event.target.value, ...nextArray];
  
            setFieldValue("selectedOptions", reqArray);
            setFieldValue(`nameList[${index}].value`, event.target.value);
          }else{
            //add toast
          }
          

        }}
        className={cx("selectStyle")}
        name={namekey}
        id={idkey}
      >
        <option style={{ color: "gray" }} value={""} disabled selected>
          {"placeholder"}
        </option>
        {options &&
          options.map((list) => {
            return <option value={list.value}>{list.label}</option>;
          })}
      </select>
      <Button
        disabled={removeDisabled}
        onClick={() => remove(index)}
        className={styles.btnStyle}
      >
        <div className={styles.hrLine} />
      </Button>
    </Flex>
  );
};

export default Select;
