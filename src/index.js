import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './components/Clock';


// import App from './components/App';
// import App2 from './components/App2';
// import App3 from './components/App3';

// import ExpenseEntryItem from './components/ExpenseEntryItem'

// import ExpenseEntryItem from './components/ExpenseEntryItem';
// import ExpenseEntryItemList from './components/ExpenseEntryItemList';

// ReactDOM.render(
//    <React.StrictMode>
//       <ExpenseEntryItem />
//    </React.StrictMode>,
//    document.getElementById('root')
// );

// const item = {
//    id: 1, 
//    name : "Grape Juice1", 
//    amount : 31.5, 
//    spendDate: new Date("2025-10-10"), 
//    category: "Food2" 
// }
// ReactDOM.render(
//    <React.StrictMode>
//    <ExpenseEntryItem item={item} />
//    </React.StrictMode>,
//    document.getElementById('root')
// );

// const items = [
//    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
//    { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
//    { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
//    { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
//    { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
//    { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
//    { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
//    { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
//    { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
//    { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
// ]
// ReactDOM.render(
//    <React.StrictMode>
//       <ExpenseEntryItemList items={items} />
//    </React.StrictMode>,
//    document.getElementById('root')
// );

// hint
   //element  root is not there we will get error: Minified React error #200;

// without default props
// ReactDOM.render(<App headerProp = "Header from props..." 
//    contentProp = "Content from props..."/>, 
//    contentProp = "Content from props..."/>, 
//    document.getElementById('root'));

// with default props
// ReactDOM.render(<App />,
//    document.getElementById('root'));

/*
const item = {
   id: 1, 
   name : "Grape Juice", 
   amount : 30.5, 
   spendDate: new Date("2020-10-10"), 
   category: "Food" 
}
ReactDOM.render(
   <React.StrictMode>
   <ExpenseEntryItem item={item} />
   </React.StrictMode>,
   document.getElementById('root')
);

// props
ReactDOM.render(<App2 />,
    document.getElementById('root'));

ReactDOM.render(<App3 />,
    document.getElementById('root'));

*/



ReactDOM.render(
   <React.StrictMode>
      <Clock />
   </React.StrictMode>,
   document.getElementById('root')
);
setTimeout(() => {
   ReactDOM.render(
      <React.StrictMode>
         <div><p>Clock is removed from the DOM.</p></div>
      </React.StrictMode>,
      document.getElementById('root')
   );
}, 5000);
   