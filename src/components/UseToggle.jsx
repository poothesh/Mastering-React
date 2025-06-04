import React, { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  return [value, toggle];
};

const UseToggle = () => {
  const [isOn, toggleIsOn] = useToggle();

  return (
    <div>
      <button onClick={toggleIsOn}> {isOn ? 'Turn Off' : 'Turn On'}</button>
      <p>Status: {isOn ? 'ON 🔆' : 'OFF 🌑'}</p>
    </div>
  );
};

export default UseToggle;
