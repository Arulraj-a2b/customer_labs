import SvgLeftAngle from "../../icons/SvgLeftAngle";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import classNames from "classnames/bind";
import styles from "./topbar.module.css";

const cx = classNames.bind(styles);
type ActionProps = {
  title: string;
  onClick?: () => void;
};
const TopBar = ({ title, onClick }: ActionProps) => {
  return (
    <Flex className={cx("overAll")}>
      <Flex row center>
        <SvgLeftAngle className={cx("svgLeft")} onClick={onClick} />
        <Text color="white" bold>
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TopBar;
