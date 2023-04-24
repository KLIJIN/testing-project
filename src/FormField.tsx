import { useState } from "react";

interface Props {
  label: string;
  type?: string;

  name: string;
  value: string;
  onChange: (value: any) => void;
}



function FormField({ label, name, type = "text", value, onChange }: Props) {
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FormField;
