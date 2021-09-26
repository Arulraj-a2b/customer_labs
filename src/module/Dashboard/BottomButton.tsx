import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import styles from "./bottombutton.module.css";
type Props = {
  onClick: Function;
  disabled: boolean;
  cancelOnClick: () => void;
};
const BottomButton = ({ onClick, disabled, cancelOnClick }: Props) => {
  return (
    <Flex row center className={styles.bottomContainer}>
      <Button
        disabled={disabled}
        onClick={() => onClick()}
        className={styles.saveBtn}
        success={disabled}
      >
        Save The Segment
      </Button>
      <Button secondary onClick={cancelOnClick}>
        Cancel
      </Button>
    </Flex>
  );
};

export default BottomButton;
