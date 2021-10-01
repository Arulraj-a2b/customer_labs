import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import {
  handleColorHelper,
  isEmpty,
  removeUnderScores,
} from "../../uikit/helpers";
import Indicator from "../../uikit/Indicator/Indicator";
import Text from "../../uikit/Text/Text";
import styles from "./addmore.module.css";

type Props = {
  item: any;
  index: number;
  handleInputChange: (arg1: number, arg2: any) => void;
  handleRemoveFields: (arg: number) => void;
  requiredOptions: any;
  setValue: (arg: boolean) => void;
};

const SelectTag = ({
  item,
  index,
  handleInputChange,
  handleRemoveFields,
  requiredOptions,
  setValue,
}: Props) => {
  if (!isEmpty(item.value)) {
    setValue(false);
  }
  if (isEmpty(item.value)) {
    setValue(true);
  }
  return (
    <Flex key={`${item}~${index}`} className={styles.selectFlexContainer}>
      {!isEmpty(item.value) && (
        <Text className={styles.valueText}>
          {removeUnderScores(item.value)}
        </Text>
      )}
      {isEmpty(item.value) && (
        <Text color="gray" className={styles.valueText}>
          Add schema to segment
        </Text>
      )}

      <Flex className={styles.select} row center>
        <Indicator color={handleColorHelper(item.value)} />
        <select
          className={styles.selectStyle}
          id={"value"}
          name="value"
          value={item.value}
          onChange={(event) => handleInputChange(index, event)}
        >
          {requiredOptions.map((list: any, index: number) => {
            return (
              <option hidden={list.value === ""} key={index} value={list.value}>
                {list.label}
              </option>
            );
          })}
        </select>

        <Button
          type="button"
          onClick={() => handleRemoveFields(index)}
          className={styles.btnStyle}
        >
          <div className={styles.hrLine} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default SelectTag;
