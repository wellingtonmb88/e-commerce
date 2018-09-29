import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  LinearProgress,
  IconButton
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import If from "./If";
import * as UserActions from "../store/actions/UserActions";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  colorPrimary: {
    backgroundColor: "#B2DFDB"
  },
  barColorPrimary: {
    backgroundColor: "#00695C"
  }
};

class CustomAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      redirectToAddProduct: false,
      redirectToAddUser: false,
      redirectToHome: false
    };
    this.isLogged = this.isLogged.bind(this);
    this.goToAddProduct = this.goToAddProduct.bind(this);
    this.goToAddUser = this.goToAddUser.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  async componentDidMount() {
    await this.isLogged();
  }

  async isLogged() {
    this.props.getLoggedUser();
    const { user } = this.props;
    if (user && user.token) {
      this.setState({
        logged: true
      });
    }
  }

  goToAddProduct() {
    this.setState({ redirectToAddProduct: true });
  }

  goToAddUser() {
    this.setState({ redirectToAddUser: true });
  }

  goToHome() {
    this.setState({ redirectToHome: true });
  }

  render() {
    const {
      redirectToAddProduct,
      redirectToAddUser,
      redirectToHome
    } = this.state;
    const {
      logout,
      user,
      isHomePage,
      loadingUser,
      loadingProducts
    } = this.props;

    if (redirectToAddUser) {
      return <Redirect to={`/add-user`} />;
    } else if (redirectToAddProduct) {
      return <Redirect to={`/add-product`} />;
    } else if (redirectToHome && !isHomePage) {
      return <Redirect to={`/home`} />;
    }

    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <If test={this.state.logged}>
              <IconButton
                style={styles.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.goToHome}
              >
                <HomeIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                {user ? user.username : null}
              </Typography>
            </If>
            <Typography variant="title" color="inherit" style={styles.grow}>
              E-Commerce
            </Typography>
            <If test={this.state.logged}>
              <div>
                <If test={user && user.role === "admin"}>
                  <Button
                    color="inherit"
                    onClick={() => {
                      this.goToAddProduct();
                    }}
                  >
                    Add Product
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => {
                      this.goToAddUser();
                    }}
                  >
                    Add User
                  </Button>
                </If>
              </div>
              <Button
                color="inherit"
                onClick={() => {
                  logout();
                  this.goToHome();
                }}
              >
                Logout
              </Button>
            </If>
          </Toolbar>
        </AppBar>
        <If test={loadingUser || loadingProducts}>
          <LinearProgress
            style={{
              colorPrimary: styles.colorPrimary,
              barColorPrimary: styles.barColorPrimary
            }}
          />
        </If>
      </div>
    );
  }
}

CustomAppBar.propTypes = {
  isHomePage: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.user.user,
  loadingUser: state.user.loading,
  loadingProducts: state.products.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomAppBar);
