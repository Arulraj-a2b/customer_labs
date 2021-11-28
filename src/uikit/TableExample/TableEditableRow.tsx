import { createRef, useEffect } from "react";
import { EmpPoolEntity } from "./TableExample";

type Props = {
  formikValue: EmpPoolEntity;
  rowEditHandleChange: any;
  handleCancelClick: any;
  hanldeSubmit: any;
};
const TableEditableRow = ({
  formikValue,
  rowEditHandleChange,
  handleCancelClick,
  hanldeSubmit,
}: Props) => {
  const ref = createRef<any>();

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleCancelClick(false);
    }
  };
  
  useEffect(() => {
    if (typeof Window !== "undefined") {
      document.addEventListener("click", handleClickOutside, true);
    }
    return () => {
      if (ref) {
        if (typeof Window !== "undefined") {
          document.removeEventListener("click", handleClickOutside, true);
        }
      }
    };
  });

  return (
    <tr ref={ref}>
      <td>
        <input
          type="text"
          placeholder="Enter a name..."
          value={formikValue.first_name}
          onChange={rowEditHandleChange("first_name")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.email}
          onChange={rowEditHandleChange("email")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.contact}
          onChange={rowEditHandleChange("contact")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.location}
          onChange={rowEditHandleChange("location")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.qualification}
          onChange={rowEditHandleChange("qualification")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.work_exp}
          onChange={rowEditHandleChange("work_exp")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.skills}
          onChange={rowEditHandleChange("skills")}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          value={formikValue.created_at}
          onChange={rowEditHandleChange("created_at")}
        ></input>
      </td>
      <td>
        <p>Active</p>
      </td>
      <td>
        <button type="button" onClick={hanldeSubmit}>
          Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default TableEditableRow;
