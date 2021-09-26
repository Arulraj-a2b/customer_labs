import Flex from "../../uikit/Flex/Flex";
import classNames from "classnames/bind";
import styles from "./sidenav.module.css";
import TopBar from "./TopBar";
import AddMore from "./AddMore";

const cx = classNames.bind(styles);
type Props = {
  sideBarOnClick: () => void;
  cancelOnClick: () => void;
};

const SideNav = ({ sideBarOnClick, cancelOnClick }: Props) => {
  return (
    <Flex className={styles.overAll} style={{ height: window.innerHeight }}>
      <Flex className={cx("sideNav")}>
        <TopBar onClick={sideBarOnClick} title={"Saving Segament"} />
        <AddMore cancelOnClick={cancelOnClick} />
      </Flex>
    </Flex>
  );
};
export default SideNav;
