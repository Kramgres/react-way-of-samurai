import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/Textarea";

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="newPostText"
                component={Textarea}
                validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>)
}

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(AddPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount}/>));

    const onSubmit = (formData) =>{
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostReduxForm onSubmit={onSubmit}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;