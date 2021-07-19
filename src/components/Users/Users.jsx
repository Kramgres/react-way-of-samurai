import React from "react";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return (
        <div>
            <Pagination currentPage={currentPage}
                        totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        onPageChanged={onPageChanged}/>
            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        followingInProgress={props.followingInProgress}/>)}
        </div>
    );
}

export default Users;