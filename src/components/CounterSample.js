import { React, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (<div>
        Counter component is under construction.
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={decrement} style={{ marginRight: "10px" }}>-</button>
            <button onClick={increment}>+</button>
        </div>
    </div>);
}