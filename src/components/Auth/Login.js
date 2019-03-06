import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { login } from '../../api/remote';
import loginValidator from '../../utils/loginValidator';
import { loginValidateForm } from '../../utils/formValidators';
import toastr from 'toastr';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;

        if (!loginValidator(user)) {
            return;
        }

        login(user)
            .then((res) => {
                if (!res.success) {
                    toastr.error("You have entered an invalid email or password");
                    return;
                }

                toastr.success(res.message);
                let username = res.user.username;
                let token = res.token;
                let isAdmin = res.user.roles.length > 0;
                this.props.userHasAuthenticated(true, username, token, isAdmin);
                this.props.history.push('/');
            })


    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const formObj = loginValidateForm(this.state);
        return (
            <MDBContainer className="marginTop">
                <MDBRow>
                    <MDBCol md="4">
                        <form method="post" onSubmit={this.handleSubmit}>
                            <p className="h2 text-center mb-4">Sign in</p>
                            <label htmlFor="defaultFormRegisterEmailEx"
                                className="grey-text">Your email</label>
                            <input
                                type="email"
                                id="defaultFormRegisterEmailEx"
                                className={formObj.validEmail() ? "form-control is-valid" : "form-control is-invalid"}
                                name="email"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text">Your password</label>
                            <input
                                type="password"
                                id="defaultFormRegisterConfirmEx"
                                className={formObj.validPassword() ? "form-control is-valid" : "form-control is-invalid"}
                                name="password"
                                onChange={this.handleChange}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="orange" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Login;