import React, { useState, useRef } from "react";

export default function HEXtoRGB() {
  const [hex, setHex] = useState("");
  const [rgb, SetRGB] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateHex = (hex: string) => {
    const hexPattern = /^#([0-9A-Fa-f]{6})$/
    return hexPattern.test(hex);
  };
  
  const HEXtoRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleHEXtoRGB = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHex(value);
    if (value.length === 7) {
      if (validateHex(value)) {
        SetRGB(HEXtoRGB(value));
        setError(false);
        document.body.style.backgroundColor = value;
      } else {
        SetRGB("");
        setError(true);
        document.body.style.backgroundColor = '#E94B35';
      }
    } else {
      SetRGB("");
      setError(false);
      document.body.style.backgroundColor = '#ffffff';
    }
  };

  return (
    <div className="container">
      <input className="box input"
        type="text"
        value={hex}
        onChange={handleHEXtoRGB}
        ref={inputRef}
        placeholder="Введите HEX цвет"
        maxLength={7}
      />
      <div className="box result">
        {rgb && <p> {rgb}</p>}
        {error && <p>Ошибка!</p>}
      </div>
    </div>
  )
}