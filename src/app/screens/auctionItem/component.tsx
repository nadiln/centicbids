import {Button, Icon, Input} from 'react-native-elements';
import {Text, View} from 'react-native';

import React from 'react';
import styles from './style.js';

interface Props {
  login?: () => void;
  email?: string;
  password?: string;
  onEmailTextChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;

}

const AuctionItemDetail: React.FunctionComponent<Props> = ({
  login,
  email,
  password,
  onEmailTextChange,
  onPasswordChange,
}) => {
  return (
    <View>
      <Text style={styles.screenHeading}>
        <Text style={styles.screenHeadingBold}> Centic</Text>
        <Text>Bids</Text>
      </Text>
      <Text style={styles.loginDescription}>
        Log in to explore the world's largest marketplace for fine art,
        antiques, and collections
      </Text>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Input
            // style={styles.textInput}
            placeholder="Email Address / Username"
            leftIcon={
              <Icon name="heartbeat" type="font-awesome" color="#517fa4" />
            }
            value={email}
            onChangeText={value => {
              console.log(value);
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
            title="Login"
            // buttonStyle={{backgroundColor: '#d12926'}}

            onPress={() => login}
          />
        </View>
      </View>
    </View>
  );
};

export default AuctionItemDetail;
