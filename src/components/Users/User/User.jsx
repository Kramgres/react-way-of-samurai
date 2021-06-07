import React from "react";
import {NavLink} from "react-router-dom";

let User = (props) => {
    return (
        <div>
            <NavLink to={'/profile/' + props.user.id}>
                <div>{props.user.name}</div>
            </NavLink>
            <div>{props.user.status}</div>
            {props.user.followed ?
                <button
                    disabled={props.followingInProgress.some(id => id === props.user.id)}
                    onClick={() => {
                        props.unfollow(props.user.id)
                }}>Unfollow</button> :
                <button
                    disabled={props.followingInProgress.some(id => id === props.user.id)}
                    onClick={() => {
                        props.follow(props.user.id)
                }}>Follow</button>}
        </div>
    )
}

export default User;