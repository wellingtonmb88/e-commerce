import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomAppBar from "./CustomAppBar";
import AddUser from "./AddUser";
import * as UserActions from "../store/actions/UserActions";

class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToLogin: false
    };
    this.loadLoggedUser = this.loadLoggedUser.bind(this);
  }

  async componentDidMount() {
    await this.loadLoggedUser();
  }

  async loadLoggedUser() {
    await this.props.getLoggedUser();
    const { user } = this.props;
    if (!user || !user.token) {
      this.setState({
        redirectToLogin: true
      });
    }
  }

  render() {
    const { redirectToLogin } = this.state;

    if (redirectToLogin) {
      return <Redirect to={`/`} />;
    }

    return (
      <div>
        <CustomAppBar />
        <AddUser />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);
