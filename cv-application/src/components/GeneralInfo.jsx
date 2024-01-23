import React, { useState } from "react";
import Input from "./Input";

function generalInfo({ onDataChange }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (label, value) => {
    if (label === "name") {
      setName(value);
    } else if (label === "email") {
      setEmail(value);
    } else if (label === "phone") {
      setPhone(value);
    }

    onDataChange({
      name,
      email,
      phone
    })
  };

  

  return (
    <section>
      <h3>General Information</h3>
      <Input
        label={"name"}
        type={"text"}
        placeholder={"Elon Musk"}
        value={name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />

      <Input
        label={"email"}
        type={"email"}
        placeholder={"notReallyElon@spaceY.com"}
        value={email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      <Input
        label={"phone"}
        type={"number"}
        placeholder={"000-000-0000"}
        value={phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
      />
    </section>
  );
}

export default generalInfo;
