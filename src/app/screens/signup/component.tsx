import {Button, Icon, Input} from 'react-native-elements';
import {Text, View} from 'react-native';

import React from 'react';
import styles from './style.js';

interface Props {
  signUp?: () => void;
  email?: string;
  password?: string;
  onEmailTextChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  navigateToLoginScreen?: () => void;
}

const SignUp: React.FunctionComponent<Props> = ({
  signUp,
  email,
  password,
  onEmailTextChange,
  onPasswordChange,
  navigateToLoginScreen,
}) => {
  return (
    <View>
      <Text style={styles.screenHeading}>
        <Text style={styles.screenHeadingBold}> Centic</Text>
        <Text>Bids</Text>
      </Text>
      <Text style={styles.loginDescription}>
        Set up your account below and joint the worlds best auction platform
      </Text>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={value => {
              onEmailTextChange(value);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            // style={styles.textInput}
            placeholder="Password"
            leftIcon={
              <Icon name="heartbeat" type="font-awesome" color="#517fa4" />
            }
            secureTextEntry={true}
            value={password}
            onChangeText={value => onPasswordChange(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Button
            style={styles.loginButton}
            title="Sign Up"
            // buttonStyle={{backgroundColor: '#d12926'}}

            onPress={() => signUp()}
          />
        </View>
        <View>
          <Text>
            Already have an account?{' '}
            <Text onPress={() => navigateToLoginScreen()}>Login</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
