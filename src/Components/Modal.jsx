import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { userContext } from "../App";

export default function Modal({ open, id, onClose }) {
  const handleEdit = useContext(userContext);
  if (!open) return null;

  return ReactDOM.createPortal(
    <form
      style={{ height: "100%", margin: "16px" }}
      onSubmit={(e) => {
        handleEdit(id, e);
        onClose();
      }}
    >
      <label htmlFor="employeename">Employee Name</label>
      <input
        type="text"
        id="employeename"
        name="name"
        placeholder="Your Employee name.."
      />

      <label htmlFor="employeecontact">Contact Number</label>
      <input
        type="tel"
        id="employeecontact"
        name="contact"
        placeholder="Your contact number"
        minLength={10}
        maxLength={10}
      />

      <input type="submit" value="Submit" />
    </form>,
    document.getElementById("editModal")
  );
}
