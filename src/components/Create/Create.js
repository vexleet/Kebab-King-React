import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleChange(e) {

    }

    render() {
        return (
            <MDBContainer className="marginTop col-centered">
                <MDBRow className="center-block">
                    <MDBCol md="4">
                        <form method="post" onSubmit={this.handleSubmit}>
                            <p className="h2 text-center mb-4">Create new kebab</p>
                            <label htmlFor="defaultCreateFormNameEx"
                                className="grey-text">Name</label>
                            <input
                                type="text"
                                id="defaultCreateFormNameEx"
                                className="form-control"
                                name="Name"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateIngredientsEx"
                                className="grey-text">Ingredients (put a comma between them)</label>
                            <input
                                type="text"
                                id="defaultFormCreateIngredientsEx"
                                className="form-control"
                                name="ingredients"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateDescriptionEx"
                                className="grey-text">Description</label>
                            <input
                                type="text"
                                id="defaultFormCreateDescriptionEx"
                                className="form-control"
                                name="description"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateImageURLEx"
                                className="grey-text">Image URL</label>
                            <input
                                type="text"
                                id="defaultFormCreateImageURLEx"
                                className="form-control"
                                name="image"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateSizeEx"
                                className="grey-text">Size</label>
                            <input
                                type="text"
                                id="defaultFormCreateSizeEx"
                                className="form-control"
                                name="size"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreatePriceEx"
                                className="grey-text">Price</label>
                            <input
                                type="number"
                                id="defaultFormCreatePriceEx"
                                className="form-control"
                                name="Price"
                                onChange={this.handleChange}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="green" type="submit">Create</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Create;