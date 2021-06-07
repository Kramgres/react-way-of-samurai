const SEND_MESSAGE = 'SEND-MESSAGE ';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Anton'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Vitaly'},
    ],
    messages: [
        {id: 1, message: 'Hi ho5'},
        {id: 2, message: 'Hello3'},
        {id: 3, message: 'Yop'},
    ],
    newMessageText: '...'
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
        {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
        {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;