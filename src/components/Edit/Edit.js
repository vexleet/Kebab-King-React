import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { editKebab } from '../../api/remote';
import createKebabValidator from '../../utils/createKebabValidator';
import { createKebabValidateForm } from '../../utils/formValidators';
import Loading from '../Common/Loading/Loading';
import toastr from 'toastr';

class Edit extends Component {
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
        let kebabId = this.props.match.params.id;

        if (!createKebabValidator(kebab)) {
            return;
        }

        kebab.ingredients = kebab.ingredients.split(',');

        editKebab(kebabId, kebab)
            .then((res) => {
                if (!res.success) {
                    toastr.error(res.message);
                    return;
                }

                toastr.success(res.message);
                this.props.updateKebabsState();
                this.props.history.push("/");
            });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        let kebabs = this.props.kebabs;
        let kebabId = this.props.match.params.id;
        let kebab = kebabs.find((k) => k._id === kebabId);

        if (kebab) {
            this.setState({
                name: kebab.name,
                ingredients: kebab.ingredients.join(","),
                description: kebab.description,
                size: kebab.size,
                price: kebab.price,
                image: kebab.image,
            });
        }
        else {
            this.props.updateKebabsState();
        }
    }

    componentWillReceiveProps(nextProps) {
        let kebabs = this.props.kebabs;
        let kebabId = this.props.match.params.id;
        let kebab = kebabs.find((k) => k._id === kebabId);

        if (kebab) {
            this.setState({
                name: kebab.name,
                ingredients: kebab.ingredients.join(','),
                description: kebab.description,
                size: kebab.size,
                price: kebab.price,
                image: kebab.image
            })
        }
    }

    render() {
        if (this.props.kebabs.length === 0) {
            return <Loading />
        }

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
                                value={this.state.name}
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
                                value={this.state.ingredients}
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
                                value={this.state.description}
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
                                value={this.state.image}
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
                                value={this.state.size}
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
                                value={this.state.price}
                                onChange={this.handleChange}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="green" type="submit">Edit</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Edit;