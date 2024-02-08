import React, { useEffect, useState } from "react";

const DisplayData = () => {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setSubmittedData(storedData);
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>Submitted Data:</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>{`Name: ${data.name}, Task: ${data.task}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
