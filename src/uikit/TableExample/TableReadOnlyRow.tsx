import { createRef, useState } from "react";
import { mouseOut } from "../helpers";
import { EmpPoolEntity } from "./TableExample";

type Props = {
  tableValue: EmpPoolEntity;
  handleEditClick: any;
  handleDeleteClick: any;
  formikValue: EmpPoolEntity;
  handleChange: any;
  handleCellEditClick: any;
  setData: (arg: EmpPoolEntity[]) => void;
  data: EmpPoolEntity[];
};

const nullCheck = (value: any) => {
  const output = value === null || value === "" ? "" : value;
  return output;
};

const TableReadOnlyRow = ({
  tableValue,
  handleEditClick,
  handleDeleteClick,
  formikValue,
  handleChange,
  handleCellEditClick,
  setData,
  data,
}: Props) => {
  const [isName, setName] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isLocation, setLocation] = useState(false);
  const [isQualification, setQualification] = useState(false);
  const [isWorkExp, setWorkExp] = useState(false);
  const [isSkills, setSkills] = useState(false);
  const [isCreatedAt, setCreatedAt] = useState(false);

  const handleCellSubmit = (id: number) => {
    const editedContact = {
      id: id,
      first_name: formikValue.first_name,
      email: formikValue.email,
      contact: formikValue.contact,
      location: formikValue.location,
      qualification: formikValue.qualification,
      work_exp: formikValue.work_exp,
      skills: formikValue.skills,
      created_at: formikValue.created_at,
    };
    const newdata = [...data];
    const index = data.findIndex((contact: EmpPoolEntity) => contact.id === id);
    newdata[index] = editedContact;
    setData(newdata);
  };

  const nameRef = createRef<any>();
  const emailRef = createRef<any>();
  const contactRef = createRef<any>();
  const locationRef = createRef<any>();
  const qualificationRef = createRef<any>();
  const workExpRef = createRef<any>();
  const skillsRef = createRef<any>();
  const createdAtRef = createRef<any>();

  const handleNameClickOutside = (event: { target: any }) => {
    if (nameRef.current && !nameRef.current.contains(event.target)) {
      setName(false);
    }
  };

  const handleEmailClickOutside = (event: { target: any }) => {
    if (emailRef.current && !emailRef.current.contains(event.target)) {
      setEmail(false);
    }
  };

  const handleContactClickOutside = (event: { target: any }) => {
    if (contactRef.current && !contactRef.current.contains(event.target)) {
      setContact(false);
    }
  };

  const handleLocationClickOutside = (event: { target: any }) => {
    if (locationRef.current && !locationRef.current.contains(event.target)) {
      setLocation(false);
    }
  };

  const handleQualificationClickOutside = (event: { target: any }) => {
    if (
      qualificationRef.current &&
      !qualificationRef.current.contains(event.target)
    ) {
      setQualification(false);
    }
  };

  const handleWorkExpClickOutside = (event: { target: any }) => {
    if (workExpRef.current && !workExpRef.current.contains(event.target)) {
      setWorkExp(false);
    }
  };

  const handleSkillsClickOutside = (event: { target: any }) => {
    if (skillsRef.current && !skillsRef.current.contains(event.target)) {
      setSkills(false);
    }
  };

  const handleCreatedAtClickOutside = (event: { target: any }) => {
    if (createdAtRef.current && !createdAtRef.current.contains(event.target)) {
      setCreatedAt(false);
    }
  };

  mouseOut(nameRef, handleNameClickOutside);
  mouseOut(emailRef, handleEmailClickOutside);
  mouseOut(contactRef, handleContactClickOutside);
  mouseOut(locationRef, handleLocationClickOutside);
  mouseOut(workExpRef, handleWorkExpClickOutside);
  mouseOut(skillsRef, handleSkillsClickOutside);
  mouseOut(createdAtRef, handleCreatedAtClickOutside);
  mouseOut(qualificationRef, handleQualificationClickOutside);

  return (
    <tr>
      {nullCheck(tableValue.first_name) === ""
        ? !isName && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setName);
              }}
            >
              Add
            </td>
          )
        : !isName && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setName);
              }}
            >
              {tableValue.first_name}
            </td>
          )}
      {isName && (
        <td ref={nameRef}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              autoFocus
              value={formikValue.first_name}
              onChange={handleChange("first_name")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.email) === ""
        ? !isEmail && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setEmail);
              }}
            >
              Add
            </td>
          )
        : !isEmail && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setEmail);
              }}
            >
              {tableValue.email}
            </td>
          )}

      {isEmail && (
        <td ref={emailRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.email}
              onChange={handleChange("email")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.contact) === ""
        ? !isContact && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setContact);
              }}
            >
              Add
            </td>
          )
        : !isContact && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setContact);
              }}
            >
              {tableValue.contact}
            </td>
          )}
      {isContact && (
        <td ref={contactRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.contact}
              onChange={handleChange("contact")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.location) === ""
        ? !isLocation && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setLocation);
              }}
            >
              Add
            </td>
          )
        : !isLocation && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setLocation);
              }}
            >
              {tableValue.location}
            </td>
          )}
      {isLocation && (
        <td ref={locationRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.location}
              onChange={handleChange("location")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.qualification) === ""
        ? !isQualification && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setQualification);
              }}
            >
              Add
            </td>
          )
        : !isQualification && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setQualification);
              }}
            >
              {tableValue.qualification}
            </td>
          )}
      {isQualification && (
        <td ref={qualificationRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.qualification}
              onChange={handleChange("qualification")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.work_exp) === ""
        ? !isWorkExp && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setWorkExp);
              }}
            >
              Add
            </td>
          )
        : !isWorkExp && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setWorkExp);
              }}
            >
              {tableValue.work_exp}
            </td>
          )}

      {isWorkExp && (
        <td ref={workExpRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.work_exp}
              onChange={handleChange("work_exp")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.skills) === ""
        ? !isSkills && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setSkills);
              }}
            >
              Add
            </td>
          )
        : !isSkills && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setSkills);
              }}
            >
              {tableValue.skills}
            </td>
          )}
      {isSkills && (
        <td ref={skillsRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.skills}
              onChange={handleChange("skills")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}

      {nullCheck(tableValue.created_at) === ""
        ? !isCreatedAt && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setCreatedAt);
              }}
            >
              Add
            </td>
          )
        : !isCreatedAt && (
            <td
              onClick={(event) => {
                handleCellEditClick(event, tableValue, setCreatedAt);
              }}
            >
              {tableValue.created_at}
            </td>
          )}
      {isCreatedAt && (
        <td ref={createdAtRef}>
          <div>
            <input
              type="text"
              autoFocus
              value={formikValue.created_at}
              onChange={handleChange("created_at")}
            />
            <button
              type="button"
              onClick={() => handleCellSubmit(tableValue.id)}
            >
              save
            </button>
          </div>
        </td>
      )}
      <td>Active</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, tableValue)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(tableValue.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableReadOnlyRow;
