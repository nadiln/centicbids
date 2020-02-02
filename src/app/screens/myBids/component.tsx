// import {Button, Icon, Input} from 'react-native-elements';

import {Text, View} from 'react-native';

import React from 'react';
import { TextBase } from 'react-native';
import styles from './style.js';

interface Props {
  signUp?: () => void;
  email?: string;
  password?: string;
  onEmailTextChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
}

const MyBids: React.FunctionComponent<Props> = ({}) => {
  return (
    <View>
      <Text>My Bids</Text>
    </View>
  );
};

export default MyBids;
