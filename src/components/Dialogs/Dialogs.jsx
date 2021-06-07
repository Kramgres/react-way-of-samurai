import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => (<Dialog name={d.name} key={d.id} id={d.id}/>));
    let messagesElements = props.messages.map(m => (<Message message={m.message} key={m.id}/>));
    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;