import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Delete extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <MDBModalHeader toggle={this.props.toggle}>Are you sure you want to delete this kebab?</MDBModalHeader>
                    <MDBModalFooter>
                        <MDBBtn color="green" onClick={this.props.toggle}>Close</MDBBtn>
                        <MDBBtn color="red" onClick={this.props.handleDelete}>Delete</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default Delete;