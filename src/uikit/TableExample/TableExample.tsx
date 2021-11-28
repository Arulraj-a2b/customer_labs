import { useFormik } from "formik";
import { useState } from "react";
import { poolData } from "./mock";
import TableEditableRow from "./TableEditableRow";
import TableReadOnlyRow from "./TableReadOnlyRow";

export interface EmpPoolEntity {
  id: number;
  first_name: string;
  email: string;
  contact: string;
  work_exp: string;
  skills: string;
  location: string;
  created_at: string;
  qualification: string;
}

const initialValues: EmpPoolEntity = {
  first_name: "",
  email: "",
  contact: "",
  location: "",
  qualification: "",
  work_exp: "",
  skills: "",
  created_at: "",
  id: 0,
};
const TableExample = () => {
  const [data, setData] = useState<any>(poolData);
  const [editDataId, setEditDataId] = useState<any>(null);

  const handleSubmit = (values: EmpPoolEntity) => {
    const editedContact = {
      id: editDataId,
      first_name: values.first_name,
      email: values.email,
      contact: values.contact,
      location: values.location,
      qualification: values.qualification,
      work_exp: values.work_exp,
      skills: values.skills,
      created_at: values.created_at,
    };
    console.log("editedContact", editedContact);

    const newdata = [...data];

    const index = data.findIndex(
      (contact: EmpPoolEntity) => contact.id === editDataId
    );
    console.log("index", index);

    newdata[index] = editedContact;
    console.log("newdata", newdata);

    setData(newdata);
    setEditDataId(null);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  const handleEditClick = (event: any, data: any) => {
    event.preventDefault();
    setEditDataId(data.id);
    const formValues = {
      first_name: data.first_name,
      email: data.email,
      contact: data.contact,
      location: data.location,
      qualification: data.qualification,
      work_exp: data.work_exp,
      skills: data.skills,
      created_at: data.created_at,
    };
    formik.setFieldValue("first_name", formValues.first_name);
    formik.setFieldValue("email", formValues.email);
    formik.setFieldValue("contact", formValues.contact);
    formik.setFieldValue("location", formValues.location);
    formik.setFieldValue("qualification", formValues.qualification);
    formik.setFieldValue("work_exp", formValues.work_exp);
    formik.setFieldValue("skills", formValues.skills);
  };

  const handleCellEditClick = (event: any, data: any, setCellEdit: any) => {
    event.preventDefault();
    setCellEdit(true);
    const formValues = {
      first_name: data.first_name,
      email: data.email,
      contact: data.contact,
      location: data.location,
      qualification: data.qualification,
      work_exp: data.work_exp,
      skills: data.skills,
      created_at: data.created_at,
    };
    formik.setFieldValue("first_name", formValues.first_name);
    formik.setFieldValue("email", formValues.email);
    formik.setFieldValue("contact", formValues.contact);
    formik.setFieldValue("location", formValues.location);
    formik.setFieldValue("qualification", formValues.qualification);
    formik.setFieldValue("work_exp", formValues.work_exp);
    formik.setFieldValue("skills", formValues.skills);
  };

  const handleCancelClick = () => {
    setEditDataId(null);
  };

  const handleDeleteClick = (dataId: number) => {
    const newdata = [...data];
    const index = data.findIndex((list: EmpPoolEntity) => list.id === dataId);
    newdata.splice(index, 1);
    setData(newdata);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name *</th>
          <th>Email ID *</th>
          <th>Contact Number</th>
          <th>Location</th>
          <th>Qualification</th>
          <th>Experience</th>
          <th>Skills</th>
          <th>Imported On</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataList: EmpPoolEntity) => (
          <>
            {editDataId === dataList.id ? (
              <TableEditableRow
                formikValue={formik.values}
                rowEditHandleChange={formik.handleChange}
                handleCancelClick={handleCancelClick}
                hanldeSubmit={formik.handleSubmit}
              />
            ) : (
              <TableReadOnlyRow
                tableValue={dataList}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                formikValue={formik.values}
                handleChange={formik.handleChange}
                handleCellEditClick={handleCellEditClick}
                setData={setData}
                data={data}
              />
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default TableExample;
