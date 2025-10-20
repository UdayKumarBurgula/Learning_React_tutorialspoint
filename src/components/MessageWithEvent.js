import React from 'react';

class MessageWithEvent extends React.Component {
   constructor(props) {
      super(props);

      this.logEventToConsole = this.logEventToConsole.bind();
   }

   //logEventToConsole(e) {
   //   console.log(e.target.innerHTML);
   //}

    logEventToConsole(msgid, e) {
        console.log(e.target.innerHTML);
        console.log(msgid);
    }

   //render() {
   //   return (
   //      <div onClick={this.logEventToConsole}>
   //         <p>Hello {this.props.name}!</p>
   //      </div>
   //   );
   //}


    render() {
        return (
            <div onClick={this.logEventToConsole.bind(this, Math.floor(Math.random() * 10))}>
                <p>Hello {this.props.name}!</p>
            </div>
        );
    }

}
export default MessageWithEvent;