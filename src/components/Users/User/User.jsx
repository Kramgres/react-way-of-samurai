import React from "react";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <NavLink to={'/profile/' + user.id}>
                <div>{user.name}</div>
            </NavLink>
            <div>{user.status}</div>
            {user.followed ?
                <button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                        unfollow(user.id)
                }}>Unfollow</button> :
                <button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                        follow(user.id)
                }}>Follow</button>}
        </div>
    )
}

export default User;