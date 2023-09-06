import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} id="name"/>
      <button>Add Guest</button>
    </div>
  );
}

export default GuestList