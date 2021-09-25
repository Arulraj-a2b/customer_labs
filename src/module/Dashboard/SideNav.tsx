import Flex from "../../uikit/Flex/Flex";
// import Text from "../../uikit/Text/Text";
// import classNames from "classnames/bind";
import styles from "./sidenav.module.css";
import TopBar from "./TopBar";

// const cx = classNames.bind(styles);
type Props = {
  sideBarOnClick: () => void;
};
const SideNav = ({ sideBarOnClick }: Props) => {
  return (
    <Flex className={styles.overAll} style={{ height: window.innerHeight }}>
      <Flex className={styles.sideNav}>
        <TopBar onClick={sideBarOnClick} title={"Saving Segament"} />
      </Flex>
    </Flex>
  );
};
export default SideNav;
