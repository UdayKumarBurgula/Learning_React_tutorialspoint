import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);// state with initial value 0
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={decrement} style={{ marginRight: "10px" }}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
