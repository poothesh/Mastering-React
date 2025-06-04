import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count +1);
    const decrease = () => setCount(count -1);
    return (
    <div>
       <h2>🔢 Counter: {count}</h2>
        <button onClick={increase}>➕ Increase</button>
        <button onClick={decrease}>➖ Decrease</button>
    </div>
  )
}

export default Counter
