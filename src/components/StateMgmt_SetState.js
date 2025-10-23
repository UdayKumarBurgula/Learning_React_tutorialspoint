import React from 'react';
import { useState } from 'react';
export default function StateMgmt_SetState() {
   const [name, setName] = useState("World")
   return (
      <div style={{ textAlign: "center", padding: "5px" }}>
         <input id="name" name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
           <div>StateMgmt_SetState Hello {name}</div>
      </div>
   )
}