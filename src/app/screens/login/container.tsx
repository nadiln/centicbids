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
      email: 'ndlh',
      password: '123',
      showLoading: false,
    };
    console.log(' this props', this.props);
  }

  static navigationOptions = {
    title: 'My Bids',
  };
  login = async () => {
    this.setState({showLoading: true});
    try {
      const doLogin = await auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password,
      );
      this.setState({showLoading: false});
      if (doLogin.user) {
        // navigation.navigate('Home');
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
  navigateToRegisterScreen = () => {
    this.props.navigation.navigate('MyBids');
  }
  render() {
    return (
      <Login
        login={this.login}
        email={this.state.email}
        password={this.state.password}
        onEmailTextChange={this.onEmailTextChange}
        onPasswordChange={this.onPasswordChange}
        navigateToRegisterScreen={this.navigateToRegisterScreen}
      />
    );
  }
}

export default Container;
