/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DiscoverAuction from './src/app/screens/discoverAuction';
import HomeScreen from './src/app/homeScreen';
import Login from './src/app/screens/login';
import MyBids from './src/app/screens/myBids';
import SignUp from './src/app/screens/signup';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firebase from 'firebase';

var config = {
  databaseURL: "https://centicbids-c0246.firebaseio.com/",
  projectId: "centicbids-c0246",
};
firebase.initializeApp(config);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
    MyBids: {
      screen: MyBids,
    },
    DiscoverAuction: {
      screen: DiscoverAuction,
    },
  },
  {
    initialRouteName: 'DiscoverAuction',
  },
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default createAppContainer(AppNavigator);
