import React, {useState} from 'react';

import {Alert} from 'react-native';
import Login from './component';

// const [showLoading, setShowLoading] = useState(false);
// import auth from '@react-native-firebase/auth';
// import { StyleSheet, ActivityIndicator, View, Text, Alert } from 'react-native';

interface Props {
  email?: string;
  password?: string;
}

interface State {
  email?: string;
  password?: string;
}

class Container extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: 'ndlh',
      password: '123',
    };
  }

  static navigationOptions = {
    title: 'Login',
    headerShown: false,
  };
  login = () => {
    Alert.alert('Okay');
    console.log('loging in...');
    // this.setState({
    //   email: 'hhhhh',
    // });
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
  render() {
    return (
      <Login
        login={this.login}
        email={this.state.email}
        password={this.state.password}
        onEmailTextChange={this.onEmailTextChange}
        onPasswordChange={this.onPasswordChange}
      />
    );
  }
}

export default Container;
