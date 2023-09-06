import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setGuests([...guests, name]);
    setName('');
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} id="name"/>
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
}

export default GuestList