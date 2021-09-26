import { ErrorMessage, FieldArray, Formik } from "formik";
import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import Select from "../../uikit/Select/Select";
import BottomButton from "./BottomButton";
// import classNames from "classnames/bind";
import styles from "./sidenav.module.css";
import InputText from "../../uikit/InputText/InputText";
import Indicator from "../../uikit/Indicator/Indicator";
import Text from "../../uikit/Text/Text";

export type FieldArrayType = {
  options: { value: string; label: string }[];
  value: string;
};

const options = [
  {
    value: "first_name",
    label: "First Name",
  },
  {
    value: "last_name",
    label: "Last Name",
  },
  {
    value: "age",
    label: "Age",
  },
  {
    value: "gender",
    label: "Gender",
  },
  {
    value: "account_name",
    label: "Account Name",
  },
  {
    value: "city",
    label: "City",
  },
];

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

const AddMore = () => {
  const postData = async (url:string, data:any) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
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
  const handleSubmit=(values:InitialValues)=>{
    console.log('values',values);
    
    postData('https://ba4c729a-5064-4479-912a-b22294a7383a.mock.pstmn.io/add_segment',{})
  }
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
                />
                <ErrorMessage name="segment_name">
                  {(msg) => (
                    <Text size={14} color="error">
                      {msg}
                    </Text>
                  )}
                </ErrorMessage>
              </Flex>
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
            <FieldArray name="nameList">
              {({ remove, push }) => {
                return (
                  <>
                    {values.nameList.map((item, index) => {
                      return (
                        <div key={item.value}>
                          <Select
                            options={item.options}
                            indicatorColor={"error"}
                            remove={remove}
                            index={index}
                            setFieldValue={setFieldValue}
                            values={values}
                            value={item.value}
                            handleInsert={() => handleInsert(push, values)}
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
            <BottomButton
              disabled={values.selectedOptions.length === 0}
              onClick={handleSubmit}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default AddMore;
