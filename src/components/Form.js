import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry',
    admin: false,
  });


  function handleChange(event){
    const key = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    setFormData({...formData, [key] : value })
  }


  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
