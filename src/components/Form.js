import React, { useState } from "react";

function Form() {
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const [submittedData, setSubmittedData] = useState([]);
const[errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (firstName.length > 0) {
      const formData={firstName: firstName, lastName: lastName}
      const dataArray = [...submittedData, formData]
      setSubmittedData(dataArray)
      setFirstName("")
      setLastName("")
      setErrors([])
    } else {
      setErrors(["First name is required!"])
    }
    // const formData = {firstName: firstName, lastName: lastName}
    // const dataArray =[...submittedData, formData]
    // setSubmittedData(dataArray)
    // const formData = {
    //   firstName: firstName,
    //   lastName:lastName,
    // }
    // props.sendFormDataSomehere(formData)
    // setFirstName("")
    // setLastName("")

    setFirstName("")
    setLastName("")
  }

  const listOfSubmittedData = submittedData.map((data, index)=>{
    return (<div key={index}>
      <p>{data.firstName} {data.lastName}</p>
    </div>)
  })
return (
  <div>
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleFirstNameChange} value={firstName}></input>
    <input type="text" onChange={handleLastNameChange} value={lastName}></input>
    <button type="submit">submit</button>
    
  </form>
  <h3>Submissions</h3>
  {errors.length > 0 ?
   errors.map((error, index)=>{
  return  <p key={index} style={{color: "red"}}>
      {error}
    </p>

  }): null}
    {listOfSubmittedData}
  </div>
  
  
)
 
}
export default Form