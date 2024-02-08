// Form.js
import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    task: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
