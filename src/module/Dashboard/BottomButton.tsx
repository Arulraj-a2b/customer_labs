import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import styles from "./bottombutton.module.css";

const BottomButton = () => {
  return (
    <Flex row center className={styles.bottomContainer}>
      <Button success className={styles.saveBtn}>
        Save The Segment
      </Button>
      <Button secondary>Cancel</Button>
    </Flex>
  );
};

export default BottomButton
