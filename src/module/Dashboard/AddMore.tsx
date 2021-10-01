import { useState } from "react";
import Flex from "../../uikit/Flex/Flex";
import BottomButton from "./BottomButton";
import styles from "./addmore.module.css";
import InputText from "../../uikit/InputText/InputText";
import Indicator from "../../uikit/Indicator/Indicator";
import Text from "../../uikit/Text/Text";
import Toast from "../../uikit/Toast/Toast";
import Button from "../../uikit/Button/Button";
import { options } from "./mock";
import { isEmpty } from "../../uikit/helpers";
import SelectTag from "./SelectTag";

const AddMore = ({ cancelOnClick }: { cancelOnClick: () => void }) => {
  const [selectedOpt, setSelectedOpt] = useState<any>([]);
  const [selectFields, setSelectFields] = useState<any>([{ value: "" }]);
  const [segmentName, setSegmentName] = useState("");
  const [isValue, setValue] = useState(true);

  const handleAddFields = () => {
    const values = [...selectFields];
    values.push({});
    setSelectFields(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...selectFields];
    values.splice(index, 1);
    selectedOpt.splice(index, 1);
    setSelectFields(values);
  };

  const handleInputChange = (index: number, event: any) => {
    const values = [...selectFields];
    values[index].value = event.target.value;
    const preArray = selectedOpt.slice(0, index);
    const nextArray = selectedOpt.slice(index + 1);
    const reqArray = [...preArray, event.target.value, ...nextArray];
    setSelectedOpt(reqArray);
  };

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const reqObj = options.reduce((acc, curval: any) => {
      if (selectedOpt.includes(curval.value)) {
        return {
          ...acc,
          [curval.value]: curval.label,
        };
      }
      return acc;
    }, {});

    const data = {
      segment_name: segmentName,
      schema: reqObj,
    };

    postData(
      "https://ba4c729a-5064-4479-912a-b22294a7383a.mock.pstmn.io/add_segment",
      data
    ).then((data) => {
      Toast(data.message, "SHORT");
    });
  };

  const requiredOptions = options.filter(
    (opt) => !selectedOpt.includes(opt.value)
  );

  const addMore = requiredOptions.length === 1 || isValue;

  return (
    <form onSubmit={handleSubmit} className={styles.from}>
      <Flex className={styles.segmentNameContainer}>
        <Flex className={styles.inputStyle}>
          <InputText
            required
            label={"Enter the Name of the Segment"}
            placeholder={"Name of the Segment"}
            value={segmentName}
            onChange={(e: any) => setSegmentName(e.target.value)}
          />
        </Flex>
        <Text>
          To save your segment,you need to add the schemas to build the query
        </Text>
        <Flex row center end className={styles.indicatorContainer}>
          <Flex className={styles.successIndicator}>
            <Indicator color="success" label="- User Traits" />
          </Flex>
          <Indicator color="error" label="- Groups Traits" />
        </Flex>
      </Flex>
      <Flex className={styles.selectTagContainer}>
        {selectFields.map((item: any, index: number) => {
          return (
            <SelectTag
              item={item}
              index={index}
              handleInputChange={handleInputChange}
              handleRemoveFields={handleRemoveFields}
              requiredOptions={requiredOptions}
              setValue={setValue}
            />
          );
        })}
      </Flex>
      <Button
        type="button"
        link
        className={styles.addBtn}
        onClick={() => handleAddFields()}
        disabled={addMore}
        style={{ color: addMore ? "gray" : "green" }}
      >
        + Add new schema
      </Button>
      <BottomButton
        onClick={handleSubmit}
        cancelOnClick={cancelOnClick}
        disabled={isEmpty(segmentName)}
      />
    </form>
  );
};

export default AddMore;
