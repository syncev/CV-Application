import React, { useState } from "react";
import Input from "./Input";

function educationExp ({onDataChange})  {
  const [schoolName, setSchoolName] = useState("");
  const[title, setTitle] = useState("");
  const[dateFinished, setDateFinished] = useState("");

  const handleInputChange = (label, value) => {
    if(label === "school name"){
      setSchoolName(value);
    } else if (label === "title"){
      setTitle(value);
    } else if (label === "date finished"){
      setDateFinished(value);
    }

    onDataChange({
      schoolName,
      title,
      dateFinished
    })
  }
  
  return (
    <section>
      <h3>Educational Experience</h3>
      <Input 
        label={"school name"} 
        type={"text"} 
        placeholder={"Hogwarts"}
        value={schoolName}
        onChange={(e) => handleInputChange("school name", e.target.value)}
        />
        
      <Input 
        label={"title"} 
        type={"text"} 
        placeholder={"Wizard"}
        value={title}
        onChange={(e) => handleInputChange("title", e.target.value)}
        />
      <Input 
        label={"date finished"} 
        type={"date"} 
        value={dateFinished}
        onChange={(e) => handleInputChange("date finished", e.target.value)}
      />
    </section>
  );
};

export default educationExp;
