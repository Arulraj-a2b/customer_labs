import{ useState, Fragment } from "react";

export const options = [
  {
    value: null,
    label: null,
  },
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
const Test = () => {
  const [selectedOpt, setSelectedOtp] = useState<any>([]);
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index: number, event: any) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    const preArray = selectedOpt.slice(0, index);
    const nextArray = selectedOpt.slice(index + 1);
    const reqArray = [...preArray, event.target.value, ...nextArray];
    setSelectedOtp(reqArray);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const requiredOptions = options.filter(
    (opt) => !selectedOpt.includes(opt.value)
  );
  
  const optLength = requiredOptions.length === 7 ? true : false;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            {console.log("inputField", inputField.value)}
            <span style={{ position: "absolute" }}>{inputField.value}</span>
            <select
              name="value"
              value={inputField.value}
              style={{ color: "#fff" }}
              onChange={(event) => handleInputChange(index, event)}
            >
              <option value="" disabled>
                Add schema to segment
              </option>
              {selectedOpt.map((listValue: any) => {
                return <span>{listValue}</span>;
              })}

              {requiredOptions.map((list: any, index: any) => {
                console.log(
                  'optLength && list.value === ""',
                  optLength && index === 0
                );
                return (
                  <option
                    hidden={list.value === null}
                    key={index}
                    value={list.value}
                  >
                    {list.label}
                  </option>
                );
              })}
            </select>
            <div>
              <button onClick={() => handleRemoveFields(index)}>-</button>
              <button onClick={() => handleAddFields()}>+</button>
            </div>
          </Fragment>
        ))}
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Save
      </button>
      <br />
      <pre>{JSON.stringify(inputFields, null, 2)}</pre>
    </form>
  );
};

export default Test;
