import {Alert} from 'react-native';
import Login from './component';
import React from 'react';
import auth from '@react-native-firebase/auth';

// import { StyleSheet, ActivityIndicator, View, Text, Alert } from 'react-native';

interface Props {
  email?: string;
  password?: string;
}

interface State {
  email?: string;
  password?: string;
  showLoading?: boolean;
}

class Container extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showLoading: false,
    };
  }

  static navigationOptions = {
    title: 'Login',
    headerShown: false,
  };
  signUp = async () => {
    this.setState({showLoading: true});
    try {
      const doRegister = await auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
      );
      this.setState({showLoading: false});
      if (doRegister.user) {
        this.props.navigation.navigate('MyBids');
      }
    } catch (e) {
      this.setState({showLoading: false});
      Alert.alert(e.message);
    }
  };

  onEmailTextChange = (value: string): void => {
    this.setState({
      email: value,
    });
    console.log(value);
  };
  onPasswordChange = (value: string): void => {
    this.setState({
      password: value,
    });
  };
  navigateToLoginScreen = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <Login
        signUp={this.signUp}
        email={this.state.email}
        password={this.state.password}
        onEmailTextChange={this.onEmailTextChange}
        onPasswordChange={this.onPasswordChange}
        navigateToLoginScreen={this.navigateToLoginScreen}
      />
    );
  }
}

export default Container;
