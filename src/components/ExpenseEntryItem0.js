import React from 'react';
import './ExpenseEntryItem.css';
import FormattedDate from './FormattedDate';
import FormattedMoney from './FormattedMoney';

// class ExpenseEntryItem extends React.Component {
//    render() {
//       return (
//          <div>class React.Component
//             <div><b>Item:</b> <em>Mango Juice</em></div>
//             <div><b>Amount:</b> <em>30.00</em></div>
//             <div><b>Spend Date:</b> <em>2020-10-10</em></div>
//             <div><b>Category:</b> <em>Food</em></div>
//          </div>
//       );
//    }
// }

function ExpenseEntryItem() {
   return (
      <div>
         <div><div><b>Item:</b> <em>Mango Juice</em></div>
         <div><b>Amount:</b> <em>30.00</em></div>
         <div><b>Spend Date:</b> <em>2020-10-10</em></div>
         <div><b>Category:</b> <em>Food</em></div>
         </div>
         <div>
           New Row
         </div>
      </div>
   );
}
export default ExpenseEntryItem;