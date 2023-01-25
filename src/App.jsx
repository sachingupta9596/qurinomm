import "./App.css";
import TopBar from "./Components/TopBar";
import BottomBar from "./Components/BottomBar";
import React, { useState, createContext, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./HomePage";
import { useEffect } from "react";

export const userContext = createContext();

export default function App() {
  const [data, setData] = useState([
    { name: "sachin", contact: 9012241506 },
    { name: "hello", contact: 9122241506 },
  ]);

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const navigator = useNavigate();

  function addData(e) {
    e.preventDefault();

    setData((prev) => {
      return [
        ...prev,
        {
          [e.target[0].name]: e.target[0].value,
          [e.target[1].name]: e.target[1].value,
        },
      ];
    });
    navigator("/");
  }

  const handleEdit = (id, e) => {
    e.preventDefault();

    const editedData = data.map((task, index) => {
      // if this task has the same ID as the edited task
      if (id === index) {
        //
        return { name: e.target[0].value, contact: e.target[1].value };
      }
      return task;
    });
    console.log(editedData);
    setData(editedData);
  };

  function deleteData(id) {
    setData((prev) => {
      return prev.filter((data, index) => {
        return index != id;
      });
    });
  }

  useEffect(() => {
    !user && navigator("/login");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<TopBar addData={addData} />} />
        <Route
          path="/"
          element={
            user ? (
              <userContext.Provider value={handleEdit}>
                <BottomBar data={data} deleteData={deleteData} />
              </userContext.Provider>
            ) : null
          }
        />
      </Routes>
    </div>
  );
}
