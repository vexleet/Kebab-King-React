import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { registerUser } from '../../api/remote';
import registerValidator from '../../utils/registerValidator';
import { registerValidateForm } from '../../utils/formValidators';
import toastr from 'toastr';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;

        if (!registerValidator(user)) {
            return;
        }

        registerUser(user)
            .then((res) => {
                if (!res.success) {
                    toastr.error("This email already exists");
                    return;
                }

                toastr.success("Registration successful. You can now login");
                this.props.history.push("/login");
            });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const formObj = registerValidateForm(this.state);

        return (
            <MDBContainer className="marginTop col-centered">
                <MDBRow className="center-block">
                    <MDBCol md="4">
                        <form method="post" onSubmit={this.handleSubmit}>
                            <p className="h2 text-center mb-4">Sign up</p>
                            <label htmlFor="defaultFormRegisterNameEx"
                                className="grey-text">Your name</label>
                            <input
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className={formObj.validUsername() ? "form-control is-valid" : "form-control is-invalid"}
                                name="username"
                                onChange={this.handleChange}
                            />
                            <br />
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
                            <br />
                            <label htmlFor="defaultFormRegisterPasswordEx"
                                className="grey-text">Confirm your password</label>
                            <input
                                type="password"
                                id="defaultFormRegisterPasswordEx"
                                className={formObj.validConfirmPassword() ? "form-control is-valid" : "form-control is-invalid"}
                                name="confirmPassword"
                                onChange={this.handleChange}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="orange" type="submit">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Register;