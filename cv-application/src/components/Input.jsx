import React from "react";

function Input({ label, type, placeholder, date,value, rows, cols, onChange}) {
  return (
    <label>
      {label} <input type={type} placeholder={placeholder} date={date} value={value} rows={rows} cols={cols} onChange={onChange}  />
    </label>
  );
}

export default Input;
