import React from "react";
import styles from "./Pagination.module.css";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) =>{
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map((p, key) => {
                        return <span key={key} onClick={(e) => onPageChanged(p)}
                                     className={currentPage === p && styles.selectedPage}>{p}</span>
                    })
                }
            </div>
        </div>
    );
}

export default Pagination;