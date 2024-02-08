import React, { useEffect, useState } from "react";

const DisplayData = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  useEffect(() => {
    // Function to update the state with data from local storage
    const updateDataFromLocalStorage = () => {
      const storedData = JSON.parse(localStorage.getItem("formData")) || [];
      setSubmittedData(storedData);
      setTriggerUpdate((prev) => !prev);
    };

    // Update the state when the component mounts
    updateDataFromLocalStorage();

    // Add an event listener to update the state when local storage changes
    window.addEventListener("storage", updateDataFromLocalStorage);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", updateDataFromLocalStorage);
    };
  }, [triggerUpdate]); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

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
