import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}
                   login={this.props.login}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default compose(
    connect(mapStateToProps, {login}),
)(LoginContainer)