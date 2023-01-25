import "./BottomBar.css";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

export default function BottomBar({ data, deleteData }) {
  const navigate = useNavigate();
  return (
    <div className="bottomBar">
      <div className="buttonbottombar">
        <button onClick={() => navigate("/add")}>Add New Employee</button>
      </div>
      <h1>Employee Table</h1>
      <div className="mainBottomContainer">
        <Table data={data} deleteData={deleteData} />
      </div>
    </div>
  );
}
