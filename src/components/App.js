import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props from state feature...",
         content: "Content from props from state feature..."
      }
   }

  // return (
         //    <div>
         //       <h1>{this.props.headerProp}</h1>
         //       <h2>{this.props.contentProp}</h2>
         //    </div>
         // );

   render() {
      return (
         <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}

App.defaultProps = {
   headerProp: "Header from props from default...",
   contentProp:"Content from props from default..."
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;