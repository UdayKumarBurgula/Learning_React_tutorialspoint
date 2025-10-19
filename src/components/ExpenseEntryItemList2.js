import React from 'react';

class ExpenseEntryItemList2 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date()
      }      
    }

    componentDidMount() {
        console.log("ExpenseEntryItemList :: Initialize :: componentDidMount :: Component mounted");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ExpenseEntryItemList :: Update :: shouldComponentUpdate invoked :: Before update");
        return true;
    }
    static getDerivedStateFromProps(props, state) {
        console.log("ExpenseEntryItemList :: Initialize / Update :: getDerivedStateFromProps :: Before update");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("ExpenseEntryItemList :: Update :: getSnapshotBeforeUpdate :: Before update");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ExpenseEntryItemList :: Update :: componentDidUpdate :: Component updated");
    }

    componentWillUnmount() {
        console.log("ExpenseEntryItemList :: Remove :: componentWillUnmount :: Component unmounted");
    }

    componentDidMount() {
      this.setTimeRef = setInterval(() => this.setTime(), 1000); 
   }
   componentWillUnmount() {
      clearInterval(this.setTimeRef)
   }
   setTime() {
      this.setState((state, props) => {
         console.log(state.date);
         return {
            date: new Date()
         }
      })
   }

    render() {
      return (
         <div>
            <p>The current time is {this.state.date.toString()}</p>
         </div>
      );
   }
}
export default ExpenseEntryItemList2;