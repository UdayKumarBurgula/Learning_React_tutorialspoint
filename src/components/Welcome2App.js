import React from "react";
import Welcome2 from "./Welcome2";
function Welcome2App() {
   return (
      <div className="container">
         <div style={{ padding: "10px" }}>
            <div>
                   <Welcome2 isLoggedIn={true} userName={'John'} />
            </div>
         </div>
      </div>
   );
}
export default Welcome2App;