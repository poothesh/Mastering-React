import React, { useState } from 'react';

const NameAge = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div style={{ marginBottom: '10px' }}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> 
        <label>Age: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        <h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </h1>
    </div>
  );
};

export default NameAge;
