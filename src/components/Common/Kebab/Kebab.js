import React, { Component } from 'react';
import { MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import Delete from '../../Delete/Delete';
import { deleteKebab } from '../../../api/remote';
import toastr from 'toastr';

class KebabCol extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleDelete() {
        let kebabId = this.props.kebab._id;

        deleteKebab(kebabId)
            .then((res) => {
                toastr.success(res.message);
                this.props.updateKebabsState();
                this.toggle();
            });
    }

    handleOrder() {
        this[0].props.addOrder(this[1]);
    }
    render() {
        let kebab = this.props.kebab;
        let { isAdmin, isAuthenticated } = this.props;

        return (
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img className="img-fluid" src={kebab.image} alt="" />
                    <MDBMask overlay="white-slight" />
                </MDBView>
                <h4 className="font-weight-bold mb-3"><strong>{kebab.name}</strong></h4>
                <p className="dark-grey-text">{kebab.description}</p>
                {isAuthenticated && !isAdmin &&
                    <div>
                        <MDBBtn color="orange" rounded size="md"
                            onClick={this.handleOrder.bind([this, kebab])}>Order</MDBBtn>
                        <Link className="white-text blue btn btn-blue btn-md btn-rounded Ripple-parent" to={`/details/${kebab._id}`}>Details</Link>
                    </div>}
                {isAdmin &&
                    <div>
                        <MDBBtn color="orange" rounded size="md">Edit</MDBBtn>
                        <MDBBtn color="red" rounded size="md" onClick={this.toggle}>Delete</MDBBtn>
                        <Delete toggle={this.toggle} modal={this.state.modal}
                            handleDelete={this.handleDelete} />
                    </div>}
            </MDBCol>
        )
    }
};

export default KebabCol;