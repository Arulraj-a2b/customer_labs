import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import TopBar from "./TopBar";
import classNames from "classnames/bind";
import styles from "./dashboardscreen.module.css";
import SideNav from "./SideNav";
import { useState } from "react";

const cx = classNames.bind(styles);

const DashboardScreen = () => {
  const [isModal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  return (
    <Flex>
      <TopBar title={"View Audience"} />
      <Button
        transparent={isModal}
        onClick={handleOpen}
        className={cx("saveBtn", { zindex: isModal })}
      >
        Save Segment
      </Button>
      {isModal && (
        <SideNav cancelOnClick={handleClose} sideBarOnClick={handleClose} />
      )}
    </Flex>
  );
};
export default DashboardScreen;
