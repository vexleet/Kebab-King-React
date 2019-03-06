import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer
} from "mdbreact";

class Navigation extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="orange" dark expand="md">
                <MDBContainer>
                    <MDBNavbarBrand>
                        <strong className="white-text brandSize">Kebab King</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className="navItemSize">
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navItemSize">
                                <MDBNavLink to="/menu">Menu</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navItemSize">
                                <MDBNavLink to="/admin/orders">Approve Orders</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navItemSize">
                                <MDBNavLink to="/orders">My Orders</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navItemSize">
                                <MDBNavLink to="/create">Create new kebab</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/register" className="navItemSize">Register</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/login" className="navItemSize">Login</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}

export default Navigation;