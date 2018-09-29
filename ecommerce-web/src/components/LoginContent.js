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

class LoginContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      invalidEmail: false,
      showError: false,
      redirectToHome: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.signIn = this.signIn.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  async componentDidMount() {
    await this.goToHome();
  }

  handleInputChange(event) {
    this.setState({
      showError: false,
      [event.target.name]: event.target.value
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  signIn() {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        showError: true
      });
      return;
    } else if (email && !this.validateEmail(email)) {
      this.setState({
        showError: true,
        invalidEmail: true
      });
      return;
    }
    this.props.login(email, password);
    this.setState({
      email: null,
      password: null
    });
  }

  async goToHome() {
    this.props.getLoggedUser();
    const { user } = this.props;
    if (user && user.token) {
      this.setState({
        redirectToHome: true
      });
    }
  }

  render() {
    const {
      email,
      password,
      showError,
      invalidEmail,
      redirectToHome
    } = this.state;

    if (redirectToHome) {
      return <Redirect to={`/home`} />;
    } else {
      this.goToHome();
    }

    return (
      <div>
        <div>
          <TextField
            error={(showError && !email) || (showError && invalidEmail)}
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email ? email : ""}
            onChange={this.handleInputChange}
            margin="normal"
            style={styles.textField}
          />
        </div>
        <div>
          <TextField
            error={showError && !password}
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
              this.signIn();
            }}
          >
            Login
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
)(LoginContent);
