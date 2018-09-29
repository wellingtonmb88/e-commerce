import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
import CustomAppBar from "./CustomAppBar";
import * as ProductActions from "../store/actions/ProductActions";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.isLogged = this.isLogged.bind(this);
  }

  componentDidMount() {
    this.props.requestProductList();
  }

  isLogged() {
    const { user } = this.props;
    return user && user.token;
  }

  render() {
    const { products } = this.props;
    const isLogged = this.isLogged();
    if (!isLogged) {
      return <Redirect to={`/`} />;
    }
    return (
      <div>
        <CustomAppBar isHomePage={true} />
        <ProductList items={products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContent);
