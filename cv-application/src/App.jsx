import './App.css'
import GeneralInfo from './components/generalInfo'
import EducationExp from './components/educationExp'
import Experience from './components/Experience'
import { useEffect, useState } from 'react'

function App() {
const [formData, setFormData] =useState({
  generalInfo : {},
  educationExp : {},
  experience : {}
  
})

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(formData)
}

  return (
    <>
      <h1>CV Generator</h1>
      
    <form onSubmit={handleFormSubmit}>
      <GeneralInfo onDataChange={(data) => setFormData((prevData) => ({ ...prevData, generalInfo: data}))}/>
      <EducationExp  onDataChange={(data) => setFormData((prevData) => ({ ...prevData, educationExp: data}))}/>
      <Experience  onDataChange={(data) => setFormData((prevData) => ({ ...prevData, experience: data}))}/>

      <button type='submit'>Generate CV</button>
    </form>
      
    </>
  )
}

export default App
