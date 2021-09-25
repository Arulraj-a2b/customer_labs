import { FieldArray, Formik } from "formik";
import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import Select from "../../uikit/Select/Select";
import BottomButton from "./BottomButton";
// import classNames from "classnames/bind";
import styles from "./sidenav.module.css";
import InputText from "../../uikit/InputText/InputText";
import Indicator from "../../uikit/Indicator/Indicator";
import Text from "../../uikit/Text/Text";

// const cx = classNames.bind(styles);
const data = [
  {
    value: "cars",
    name: "TATA",
  },
  {
    value: "cars",
    name: "TATA ONE",
  },
  {
    value: "cars",
    name: "TATA TWO",
  },
];
type FormInitialType = {
  nameList: any[];
};

const initialValues: FormInitialType = {
  nameList: ["1", "hai"],
};

const AddMore = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ values, setFieldValue, handleSubmit }) => {
        return (
          <>
            <Flex className={styles.inputContainer}>
              <InputText
                label={"Enter the Name of the Segment"}
                placeholder={"Name of the Segment"}
                className={styles.inputStyle}
              />
              <Text>
                To save your segment,you need to add the schemas to build the
                query
              </Text>
              <Flex row center end className={styles.indicatorContainer}>
                <Flex style={{ marginRight: 12 }}>
                  <Indicator color="success" label="- User Traits" />
                </Flex>
                <Indicator color="error" label="- Groups Traits" />
              </Flex>
            </Flex>
            <Flex>
              <Select placeholder={"name"} />
            </Flex>
            <FieldArray name={"nameList"}>
              {({ insert, remove }) =>
                values.nameList.map((list, listIndex) => {
                  return (
                    <Flex>
                      <Flex key={listIndex}>
                        <Select
                          options={data}
                          indicatorColor={"error"}
                          removeOnClick={() => remove(listIndex)}
                          onChange={() => {}}
                        />
                        {values.nameList.length - 1 === listIndex && (
                          <Button
                            onClick={() => insert(listIndex, "")}
                            link
                            className={styles.addBtn}
                          >
                            + Add new schema
                          </Button>
                        )}
                      </Flex>
                    </Flex>
                  );
                })
              }
            </FieldArray>
            <BottomButton />
          </>
        );
      }}
    </Formik>
  );
};

export default AddMore;
