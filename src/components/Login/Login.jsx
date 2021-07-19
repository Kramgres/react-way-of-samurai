import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/Input";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router";
import styles from "./../common/FormsControls/FormControls.module.css"

export const LoginForm = ({handleSubmit, error, captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="login"
                           type="text"
                           placeholder="Login"
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        component={Input}
                        validate={[required]}/>
                </div>
                {
                    error &&
                    <div className={styles.formSummaryError}>
                        {error}
                    </div>
                }

                <div>
                    <Field name="rememberMe" type="checkbox" component={Input}/> remember me
                </div>
                {captchaUrl &&
                <div>
                    <div><img src={captchaUrl} alt="Captcha"/></div>
                    <Field
                        name="captcha"
                        type="text"
                        placeholder="Captcha"
                        component={Input}
                        validate={[required]}/>
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        );
    }
;

const LoginReduxForm = reduxForm(
    {
        form: 'login'
    }
)(LoginForm)

const Login = (props) => {
        const onSubmit = (formData) => {
            props.login(formData);
        }

        if (props.isAuth) {
            return <Redirect to="/profile"/>
        }

        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        );
    }
;

export default Login;
