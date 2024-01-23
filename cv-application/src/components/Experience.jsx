import React, { useState } from 'react'
import Input from './Input'
function Experience  ({onDataChange}) {
  const[companyName, setCompanyName] = useState("")
  const[positionTitle, setPositionTitle] = useState("")
  const[responsibilities, setResponsibilities] = useState("")
  const[jobSince, setJobSince] = useState("")
  const[jobTo, setJobTo] = useState("")

  const handleInputChange = (label, value) => {
    if (label === "company name"){
      setCompanyName(value)
    } else if (label === "position title"){
      setPositionTitle(value)
    } else if (label === "main responsibilities"){
      setResponsibilities(value)
    } else if (label === "from"){
      setJobSince(value)
    } else if (label === "to"){
      setJobTo(value)
    }

    onDataChange({
      companyName,
      positionTitle,
      responsibilities,
      jobSince,
      jobTo
    })
  }



  return (
    <section>
        <h3>Job Experience</h3>
        <Input 
          label={"company name"} 
          type={"text"} 
          placeholder={"Hasbro"}
          value={companyName}
          onChange={(e) => handleInputChange('company name', e.target.value)}
          />
        <Input 
          label={"position title"} 
          type={"text"} 
          placeholder={"jr v.p."}
          value={positionTitle}
          onChange={(e) => handleInputChange('position title', e.target.value)}
          />
          <Input 
            label={"main responsibilities"}
            type={"text"}
            placeholder={"sales rep"}
            value={responsibilities}
            onChange={(e) => handleInputChange("main responsibilities", e.target.value)}
          />
        
        <Input 
          label={"from"} 
          type={"date"}
          value={jobSince}
          onChange={(e) => handleInputChange('from', e.target.value)}
          />
        <Input 
          label={"to"} 
          type={"date"}
          value={jobTo}
          onChange={(e) => handleInputChange('to', e.target.value)}
          />
    </section>
  )
}

export default Experience