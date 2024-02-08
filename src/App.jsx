import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";

function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    task: "",
  });

  const handleFormSubmit = (formData) => {
    // Save form data to local storage
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    const newData = [...existingData, formData];
    localStorage.setItem("formData", JSON.stringify(newData));

    console.log("Form data submitted:", formData);

    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
      task: "",
    });
    console.log("Form data submitted:", formData);
  };
  return (
    <>
      <div>
        <Navbar />
        <TaskForm onSubmit={handleFormSubmit} />
        <TaskList />

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
