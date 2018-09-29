import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextField, Button } from "@material-ui/core";
import * as UserActions from "../store/actions/UserActions";

const styles = {
  textField: {
    textAlign: "center",
    marginLeft: 10,
    width: "50%",
    marginRight: 10
  },
  button: { textAlign: "bottom", marginTop: 15 }
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
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
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({
        showError: true
      });
      return;
    }
    this.props.addUser({ username, email, password, role: "user" });
    this.setState({
      username: null,
      email: null,
      password: null,
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
    const { username, email, password, showError, redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect to={`/home`} />;
    }

    return (
      <div>
        <div>
          <TextField
            error={showError && !username}
            id="username"
            name="username"
            type="string"
            label="Username"
            value={username ? username : ""}
            onChange={this.handleInputChange}
            margin="normal"
            style={styles.textField}
          />
        </div>
        <div>
          <TextField
            error={showError && !email}
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email ? email : ""}
            onChange={this.handleInputChange}
            style={styles.textField}
          />
          <TextField
            error={showError && !email}
            id="password"
            name="password"
            type="password"
            label="Password"
            value={password ? password : ""}
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
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
