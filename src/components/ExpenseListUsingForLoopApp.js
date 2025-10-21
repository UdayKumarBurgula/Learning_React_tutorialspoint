import React from 'react';
import ExpenseListUsingForLoop from './ExpenseListUsingForLoop';
import './ExpenseListUsingForLoop.css';
function ExpenseListUsingForLoopApp() {
   var expenses = [100, 200, 300]
   return (
      <div>
         <ExpenseListUsingForLoop expenses={expenses} />
      </div>
   );
}
export default ExpenseListUsingForLoopApp;