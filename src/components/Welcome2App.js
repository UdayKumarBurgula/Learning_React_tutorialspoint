import React from "react";
import Welcome2 from "./Welcome2";
import ShowUsers from "./ShowUsers";
import './Welcome2App.css';
function Welcome2App() {
   const users = ['John', 'Peter']

   return (
      <div className="container">
         <div style={{ padding: "10px" }}>
               <div class="row">
                   <div class="column1" style={{ padding: "10px" }}>
                       <ShowUsers users={users} />
                   </div>
                   <div class="column2">
                    <Welcome2 isLoggedIn={true} userName={'John'} />
                   </div>                   
            </div>
         </div>
      </div>
   );
}
export default Welcome2App;