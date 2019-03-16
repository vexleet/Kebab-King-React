import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { createKebab } from '../../api/remote';
import createKebabValidator from '../../utils/createKebabValidator';
import { createKebabValidateForm } from '../../utils/formValidators';
import toastr from 'toastr';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            ingredients: "",
            description: "",
            price: 0,
            size: "",
            image: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let kebab = Object.assign({}, this.state);

        if (!createKebabValidator(kebab)) {
            return;
        }

        kebab.ingredients = kebab.ingredients.split(',');

        createKebab(kebab)
            .then((res) => {
                if (!res.success) {
                    toastr.error(res.message);
                    return;
                }

                toastr.success(res.message);
                this.props.history.push("/");
            });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const formObj = createKebabValidateForm(this.state);

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
                                className={formObj.validName() ? "form-control is-valid" : "form-control is-invalid"}
                                name="name"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateIngredientsEx"
                                className="grey-text">Ingredients (put a comma between them)</label>
                            <input
                                type="text"
                                id="defaultFormCreateIngredientsEx"
                                className={formObj.validIngredients() ? "form-control is-valid" : "form-control is-invalid"}
                                name="ingredients"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateDescriptionEx"
                                className="grey-text">Description</label>
                            <input
                                type="text"
                                id="defaultFormCreateDescriptionEx"
                                className={formObj.validDescription() ? "form-control is-valid" : "form-control is-invalid"}
                                name="description"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateImageURLEx"
                                className="grey-text">Image URL</label>
                            <input
                                type="text"
                                id="defaultFormCreateImageURLEx"
                                className={formObj.validImage() ? "form-control is-valid" : "form-control is-invalid"}
                                name="image"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreateSizeEx"
                                className="grey-text">Size</label>
                            <input
                                type="text"
                                id="defaultFormCreateSizeEx"
                                className={formObj.validSize() ? "form-control is-valid" : "form-control is-invalid"}
                                name="size"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="defaultFormCreatePriceEx"
                                className="grey-text">Price</label>
                            <input
                                type="number"
                                id="defaultFormCreatePriceEx"
                                className={formObj.validPrice() ? "form-control is-valid" : "form-control is-invalid"}
                                name="price"
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