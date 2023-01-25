import React, { useState } from "react";
import "./Table.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "./Modal";

function Table({ data, deleteData }) {
  // const { campaignList, handleDelete, handleToggle } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  function onsubmit() {
    setOpen(false);
  }

  function handleEditClick(index) {
    setOpen(true);
    setId(index);
  }
  return (
    <div className="tableContainer">
      <table style={{ overflowX: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>

        {data.length !== 0 ? (
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>
                  <span>{data.name}</span>
                </td>
                <td>
                  <span>{data.contact}</span>
                </td>

                <td>
                  <div>
                    <span>
                      <EditIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEditClick(index)}
                      />
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteData(index)}
                    >
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : null}
      </table>
      <Modal open={open} id={id} onClose={onsubmit} />
    </div>
  );
}
export default React.memo(Table);
