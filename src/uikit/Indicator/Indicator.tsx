import classNames from "classnames/bind";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import { isEmpty } from "../helpers";
import styles from "./flex.module.css";

const cx = classNames.bind(styles);
type Props = {
  label?: string;
  color?: "error" | "success";
  className?: string;
};
const Indicator = ({ label, color, className }: Props) => {
  const indicatorclassName = cx(
    "commonStyle",
    {
      [`${color}`]: color,
    },
    className
  );
  return (
    <Flex row center>
      <div className={indicatorclassName} />
      {isEmpty(label) && <Text className={styles.lableStyle}>{label}</Text>}
    </Flex>
  );
};

export default Indicator;