import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, friend', likesCount: 11},
                {id: 2, message: 'Normal', likesCount: 6},
            ],
            newPostText: 'default'
        },
        dialogsPage: {
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
    },

    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;