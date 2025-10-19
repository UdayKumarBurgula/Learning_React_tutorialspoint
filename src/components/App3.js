import React from 'react'
import Welcome from './welcome';

function App3() {
   return (
      <div className="container">
         <div style={{ padding: "10px" }}>
            <div>
               <Welcome name={'John'} />
            </div>
         </div>
      </div>
   );
}
export default App3;