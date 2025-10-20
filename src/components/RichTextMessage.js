import React from 'react';
import styles from './ExpenseEntryItem.css'

class RichTextMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><u>{this.props.children}</u></div>
        )
    }
}
export default RichTextMessage;