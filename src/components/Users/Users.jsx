import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";

let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={(e) => props.onPageChanged(p)}
                                     className={props.currentPage === p && styles.selectedPage}>{p}</span>
                    })
                }
            </div>
            {props.users.map(u => <User user={u}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        followingInProgress={props.followingInProgress}/>)}
        </div>
    );
}

export default Users;