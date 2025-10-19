import React from 'react'
import './App2.css'
import Sum from './Sum';

function App2() {
   return (
      <div className="container">
         <div style={{ padding: "10px" }}>
            <div>
               <Sum num1="10" num2="John" />
            </div>
         </div>
      </div>
   );
}
export default App2;