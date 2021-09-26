import { FieldArray, Formik } from "formik";
import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import BottomButton from "./BottomButton";
import styles from "./addmore.module.css";
import InputText from "../../uikit/InputText/InputText";
import Indicator from "../../uikit/Indicator/Indicator";
import Text from "../../uikit/Text/Text";
import Toast from "../../uikit/Toast/Toast";
import { options } from "./mock";
import SelectTag from "./SelectTag";

export type FieldArrayType = {
  options: { value: string; label: string }[];
  value: string;
};

const INITIALOBJECT = {
  options,
  value: "",
};
export type InitialValues = {
  segment_name: string;
  nameList: FieldArrayType[];
  selectedOptions: string[];
};

const updateInitialState = (): InitialValues => {
  return {
    segment_name: "",
    nameList: [INITIALOBJECT],
    selectedOptions: [],
  };
};

const AddMore = ({ cancelOnClick }: { cancelOnClick: () => void }) => {
  const postData = async (url: string, data: any) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const handleInsert = (
    push: (obj: FieldArrayType) => void,
    values: InitialValues
  ) => {
    const filteredArray: { value: string; label: string }[] = options.filter(
      (item) => !values.selectedOptions.includes(item.value)
    );
    push({ options: filteredArray, value: "" });
  };

  const handleValidation = (values: InitialValues) => {
    const error: Partial<InitialValues> = {};
    if (values.segment_name === "") {
      error.segment_name = "This Field is Required";
    }
    return error;
  };

  const handleSubmit = (values: InitialValues) => {
    const reqObj = options.reduce((acc, curval) => {
      if (values.selectedOptions.includes(curval.value)) {
        return {
          ...acc,
          [curval.value]: curval.label,
        };
      }
      return acc;
    }, {});

    const data = {
      segment_name: values.segment_name,
      schema: reqObj,
    };

    postData(
      "https://ba4c729a-5064-4479-912a-b22294a7383a.mock.pstmn.io/add_segment",
      data
    ).then((data) => {
      console.log("data", data.message);
      Toast(data.message, "SHORT");
    });
  };

  return (
    <Formik
      initialValues={updateInitialState()}
      onSubmit={handleSubmit}
      enableReinitialize
      validate={handleValidation}
    >
      {({ values, setFieldValue, handleSubmit, handleChange }) => {
        return (
          <>
            <Flex className={styles.inputContainer}>
              <Flex className={styles.inputStyle}>
                <InputText
                  label={"Enter the Name of the Segment"}
                  placeholder={"Name of the Segment"}
                  value={values.segment_name}
                  onChange={handleChange("segment_name")}
                  errorName={"segment_name"}
                />
              </Flex>
              <Text>
                To save your segment,you need to add the schemas to build the
                query
              </Text>
              <Flex row center end className={styles.indicatorContainer}>
                <Flex className={styles.successIndicator}>
                  <Indicator color="success" label="- User Traits" />
                </Flex>
                <Indicator color="error" label="- Groups Traits" />
              </Flex>
            </Flex>
            <FieldArray name="nameList">
              {({ remove, push }) => {
                return (
                  <>
                    {values.nameList.map((item, index) => {
                      return (
                        <div className={styles.selectTag} key={item.value}>
                          <SelectTag
                            options={item.options}
                            remove={remove}
                            index={index}
                            setFieldValue={setFieldValue}
                            values={values}
                            value={item.value}
                            idkey={"select"}
                          />
                        </div>
                      );
                    })}
                    <Button
                      onClick={() => handleInsert(push, values)}
                      link
                      className={styles.addBtn}
                    >
                      + Add new schema
                    </Button>
                  </>
                );
              }}
            </FieldArray>
            {console.log("values.nameList", values.nameList.length === 0)}
            <BottomButton
              disabled={
                values.nameList.length === 0 ||
                values.selectedOptions.length === 0
              }
              onClick={handleSubmit}
              cancelOnClick={cancelOnClick}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default AddMore;
