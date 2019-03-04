import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <MDBContainer className="marginTop">
                <MDBRow>
                    <MDBCol md="4">
                        <form>
                            <p className="h2 text-center mb-4">Sign in</p>
                            <label htmlFor="defaultFormRegisterEmailEx"
                                className="grey-text">Your email</label>
                            <input
                                type="email"
                                id="defaultFormRegisterEmailEx"
                                className="form-control"
                                name="email"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text">Your password</label>
                            <input
                                type="email"
                                id="defaultFormRegisterConfirmEx"
                                className="form-control"
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