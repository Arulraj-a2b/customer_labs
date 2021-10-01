import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import styles from "./bottombutton.module.css";
type Props = {
  onClick: any;
  disabled: boolean;
  cancelOnClick: () => void;
};
const BottomButton = ({ onClick, disabled, cancelOnClick }: Props) => {
  return (
    <Flex row center className={styles.bottomContainer}>
      <Button
        type="submit"
        disabled={disabled}
        className={styles.saveBtn}
        success={disabled}
        onSubmit={onClick}
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
