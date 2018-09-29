import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextField, Button } from "@material-ui/core";
import * as ProductActions from "../store/actions/ProductActions";

const styles = {
  textField: {
    textAlign: "center",
    marginLeft: 10,
    width: "50%",
    marginRight: 10
  },
  button: { textAlign: "bottom", marginTop: 15 }
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      price: null,
      description: null,
      showError: false,
      redirectToHome: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.save = this.save.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      showError: false,
      [event.target.name]: event.target.value
    });
  }

  save() {
    const { title, price, description } = this.state;
    if (!title || !price || !description) {
      this.setState({
        showError: true
      });
      return;
    }
    this.props.addProduct({ title, price, description });
    this.setState({
      title: null,
      price: null,
      description: null,
      redirectToHome: true
    });
  }

  async goToHome() {
    const { user } = this.props;
    if (user && user.token) {
      this.setState({
        redirectToHome: true
      });
    }
  }

  render() {
    const { title, price, description, showError, redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect to={`/home`} />;
    }

    return (
      <div>
        <div>
          <TextField
            error={showError && !title}
            id="title"
            name="title"
            type="string"
            label="Title"
            value={title ? title : ""}
            onChange={this.handleInputChange}
            margin="normal"
            style={styles.textField}
          />
        </div>
        <div>
          <TextField
            error={showError && !price}
            id="price"
            name="price"
            type="number"
            label="Price"
            value={price ? price : ""}
            onChange={this.handleInputChange}
            style={styles.textField}
          />
          <TextField
            error={showError && !price}
            id="description"
            name="description"
            type="string"
            label="Description"
            value={description ? description : ""}
            onChange={this.handleInputChange}
            style={styles.textField}
          />
        </div>
        <div style={styles.button}>
          <Button
            variant="raised"
            color="primary"
            onClick={() => {
              this.save();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
