import Flex from "../../uikit/Flex/Flex";
import InputText from "../../uikit/InputText/InputText";
import Text from "../../uikit/Text/Text";
import classNames from "classnames/bind";
import styles from "./sidenav.module.css";
import TopBar from "./TopBar";
import Indicator from "../../uikit/Indicator/Indicator";
import Select from "../../uikit/Select/Select";
import Button from "../../uikit/Button/Button";
import BottomButton from "./BottomButton";
import { FieldArray, Formik } from "formik";
import AddMore from "./AddMore";

const cx = classNames.bind(styles);
type Props = {
  sideBarOnClick: () => void;
};

const SideNav = ({ sideBarOnClick }: Props) => {
  return (
    <Flex className={styles.overAll} style={{ height: window.innerHeight }}>
      <Flex className={cx("sideNav")}>
        <TopBar onClick={sideBarOnClick} title={"Saving Segament"} />
        <AddMore />
        {/* <Flex className={styles.inputContainer}>
          <InputText
            label={"Enter the Name of the Segment"}
            placeholder={"Name of the Segment"}
            className={styles.inputStyle}
          />
          <Text>
            To save your segment,you need to add the schemas to build the query
          </Text>
          <Flex row center end className={styles.indicatorContainer}>
            <Flex style={{ marginRight: 12 }}>
              <Indicator color="success" label="- User Traits" />
            </Flex>
            <Indicator color="error" label="- Groups Traits" />
          </Flex> */}
          {/* <AddMore /> */}
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
};
export default SideNav;
