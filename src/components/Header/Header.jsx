import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            {props.isAuth ?
                <div>{props.login}</div> :
                <NavLink to={'/login'} className={s.loginBtn}>Login</NavLink>
            }
        </header>
    )
}

export default Header;