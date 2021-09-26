import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import styles from "./bottombutton.module.css";
type Props = {
  onClick: Function;
  disabled: boolean;
};
const BottomButton = ({ onClick, disabled }: Props) => {
  return (
    <Flex row center className={styles.bottomContainer}>
      <Button
        disabled={disabled}
        onClick={() => onClick()}
        className={styles.saveBtn}
        style={{ backgroundColor: disabled ? "gray" : "green" }}
      >
        Save The Segment
      </Button>
      <Button secondary>Cancel</Button>
    </Flex>
  );
};

export default BottomButton;
