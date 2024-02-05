import React from 'react'
import GeneralInfo from "../components/generalInfo";
import EducationExp from "../components/educationExp";
import Experience from "../components/Experience";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const CVForm = () => {

    const [formData, setFormData] = useState({
        generalInfo: {},
        educationExp: {},
        experience: {},
      });
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        
      };
  return (
    <form onSubmit={handleFormSubmit}>
        <GeneralInfo
          onDataChange={(data) =>
            setFormData((prevData) => ({ ...prevData, generalInfo: data }))
          }
        />
        <EducationExp
          onDataChange={(data) =>
            setFormData((prevData) => ({ ...prevData, educationExp: data }))
          }
        />
        <Experience
          onDataChange={(data) =>
            setFormData((prevData) => ({ ...prevData, experience: data }))
          }
        />

        <button type="submit"><Link to="/Processed" >Generate CV</Link></button>
      </form>
  )
}

export default CVForm