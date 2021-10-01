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
import { isEmpty, removeUnderScores } from "../../uikit/helpers";

const AddMore = ({ cancelOnClick }: { cancelOnClick: () => void }) => {
  const [selectedOpt, setSelectedOpt] = useState<any>([]);
  const [selectFields, setSelectFields] = useState<any>([{ value: "" }]);
  const [segmentName, setSegmentName] = useState("");
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

  const requiredOptionsLength = requiredOptions.length === 1;
  
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
            <Flex className={styles.selectFlexContainer}>
              {!isEmpty(item.value) && (
                <Text className={styles.valueText}>
                  {removeUnderScores(item.value)}
                </Text>
              )}
              {isEmpty(item.value) && (
                <Text color="gray" className={styles.valueText}>
                  Add schema to segment
                </Text>
              )}

              <Flex
                className={styles.select}
                row
                center
                key={`${item}~${index}`}
              >
                <select
                  className={styles.selectStyle}
                  id={"value"}
                  name="value"
                  value={item.value}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  {requiredOptions.map((list: any, index) => {
                    return (
                      <option
                        hidden={list.value === ""}
                        key={index}
                        value={list.value}
                      >
                        {list.label}
                      </option>
                    );
                  })}
                </select>

                <Button
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                  className={styles.btnStyle}
                >
                  <div className={styles.hrLine} />
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Button
        type="button"
        link
        className={styles.addBtn}
        onClick={() => handleAddFields()}
        disabled={requiredOptionsLength}
        style={{ color: requiredOptionsLength ? "gray" : "green" }}
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
