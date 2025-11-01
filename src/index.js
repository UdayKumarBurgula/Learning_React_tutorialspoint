import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

// import App from './components/App';
// import App2 from './components/App2';
// import App3 from './components/App3';
// import Clock from './components/Clock';
// import ExpenseEntryItem from './components/ExpenseEntryItem'
// import ExpenseEntryItemList2 from './components/ExpenseEntryItemList2';
// import MessageWithEvent from './components/MessageWithEvent'
// import ExpenseEntryItemList3 from './components/ExpenseEntryItemList3'
// import Clock2 from './components/Clock2';
// import ExpenseEntryItemList4 from './components/ExpenseEntryItemList4'
// import HookClock from './components/HookClock';
// import ExpenseEntryItemListFn from './components/ExpenseEntryItemListFn'
// import ClockUseEffect from './components/ClockUseEffect';

// import ExpenseEntryItem from './components/ExpenseEntryItem';
// import ExpenseEntryItemList from './components/ExpenseEntryItemList';
// import ExpenseEntryItemList5 from './components/ExpenseEntryItemList5';


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
   name : "Grape Juice",    amount : 30.5, 
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

ReactDOM.render(
   <React.StrictMode>
      <ExpenseEntryItemList2 />
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


ReactDOM.render(
   <React.StrictMode>
       <div>
            <MessageWithEvent name="React" />
            <MessageWithEvent name="React developer" />
      </div>
   </React.StrictMode>,
   document.getElementById('root')
);

const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
    { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]
ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItemList3 items={items} />
    </React.StrictMode>,
    document.getElementById('root')
);


ReactDOM.render(
    <React.StrictMode>
        <Clock2 />
    </React.StrictMode>,
    document.getElementById('root')
);


const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
    { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]
ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItemList4 items={items} />
    </React.StrictMode>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <HookClock />
    </React.StrictMode>,
    document.getElementById('root')
);


const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
    { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]
ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItemListFn items={items} />
    </React.StrictMode>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <ClockUseEffect />
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


/// RichTextMessage

import RichTextMessage from './components/RichTextMessage';

ReactDOM.render(
    <React.StrictMode>
        <RichTextMessage>
            <h1>Containment is really an excellent feature.</h1>
        </RichTextMessage>
    </React.StrictMode>,
    document.getElementById('root')
);


const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
    { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]
ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItemList5 items={items}
            header={
                <div><h1>Expense manager</h1></div>
            }
            footer={
                <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: 12 }}>Sample application</p>
                </div>
            }
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// pagination.

import App4 from './components/App4';

ReactDOM.render(<App4 />,
    document.getElementById('root'));

// material ui
import ExpenseEntryItemList6 from './components/ExpenseEntryItemList6';

const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
    { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]

ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItemList6 items={items} />
    </React.StrictMode>,
    document.getElementById('root')
);

// fetch API call - integrate with express api

import ExpenseEntryItemList7 from './components/ExpenseEntryItemList7';

ReactDOM.render(
    <React.StrictMode>
        <ExpenseEntryItemList7 />
    </React.StrictMode>,
    document.getElementById('root')
);

// simpleForm1

import SimpleForm1 from './components/SimpleForm1.js';

ReactDOM.render(<SimpleForm1 />, document.getElementById('root'));


// simpleForm2 : event in child to parent through prop.

import SimpleForm2 from './components/SimpleForm2.js';

ReactDOM.render(<SimpleForm2 />, document.getElementById('root'));


// controller form

import ExpenseForm from './components/ExpenseForm';

ReactDOM.render(
    <React.StrictMode>
        <ExpenseForm />
    </React.StrictMode>,
    document.getElementById('root')
);

// uncontrolled form using ref

import ExpenseForm2 from './components/ExpenseForm'

ReactDOM.render(
    <React.StrictMode>
        <ExpenseForm2 />
    </React.StrictMode>,
    document.getElementById('root')
);

// form using ExpenseFormik

import ExpenseFormik from './components/ExpenseFormik'

ReactDOM.render(
    <React.StrictMode>
        <ExpenseFormik />
    </React.StrictMode>,
    document.getElementById('root')
);


import Welcome2App from './components/Welcome2App';

ReactDOM.render(<Welcome2App />,
    document.getElementById('root'));


import ExpenseListUsingForLoopApp from './components/ExpenseListUsingForLoopApp';

ReactDOM.render(<ExpenseListUsingForLoopApp />,
    document.getElementById('root'));


 // set useState example

import StateMgmt_SetStateApp from './components/StateMgmt_SetStateApp';


ReactDOM.render(<StateMgmt_SetStateApp />,
    document.getElementById('root'));

ReactDOM.render(<LoginFormApp />,  
    document.getElementById('root'));

*/
 
import LoginFormApp from './components/LoginFormApp';

ReactDOM.render(<Counter />,
    document.getElementById('root'));






