import classNames from "classnames/bind";
import styles from "./selecttag.module.css";
import { InitialValues } from "../../module/Dashboard/AddMore";
import Indicator, { IndicatorColor } from "../../uikit/Indicator/Indicator";
import Flex from "../../uikit/Flex/Flex";
import Button from "../../uikit/Button/Button";
import Toast from "../../uikit/Toast/Toast";

const cx = classNames.bind(styles);
export type list = {
  [key: string]: any;
};
type Props = {
  idkey?: string;
  namekey?: string;
  options?: any;
  removeDisabled?: boolean;
  onChange?: any;
  placeholder?: string;
  remove: Function;
  index: number;
  setFieldValue: Function;
  values: InitialValues;
  value: string;
  // setSelectedOtp: any
};
const SelectTag = ({
  namekey,
  idkey,
  options,
  removeDisabled,
  remove,
  setFieldValue,
  index,
  values,
  value,
}: // setSelectedOtp,
Props) => {
  const handleColorHelper = () => {
    let color: IndicatorColor = "grey";
    const value = values.nameList[index].value;
    if (
      value === "first_name" ||
      value === "last_name" ||
      value === "age" ||
      value === "gender"
    ) {
      color = "success";
    } else if (value === "account_name" || value === "city") {
      color = "error";
    } else {
      color = "grey";
    }
    return color;
  };
  const handleRemove = () => {
    remove(index);
    values.selectedOptions.splice(index, 1);
  };
  return (
    <Flex row center className={cx("selectTagContainer")}>
      <Indicator
        color={handleColorHelper()}
        className={styles.indicatorStyle}
      />
      <select
        required
        value={value}
        onChange={(event) => {
          if (!values.selectedOptions.includes(event.target.value)) {
            const preArray = values.selectedOptions.slice(0, index);
            const nextArray = values.selectedOptions.slice(index + 1);
            const reqArray = [...preArray, event.target.value, ...nextArray];
            setFieldValue("selectedOptions", reqArray);
            setFieldValue(`nameList[${index}].value`, event.target.value);
          } else {
            Toast("Already Selected");
          }
        }}
        className={cx("selectStyle")}
        name={namekey}
        id={idkey}
      >
        <option value="" disabled selected hidden>
          Add schema to segment
        </option>
        {options &&
          options.map((list: any) => {
            return <option value={list.value}>{list.label}</option>;
          })}
      </select>
      <Button
        disabled={removeDisabled}
        onClick={handleRemove}
        className={styles.btnStyle}
      >
        <div className={styles.hrLine} />
      </Button>
    </Flex>
  );
};

export default SelectTag;
