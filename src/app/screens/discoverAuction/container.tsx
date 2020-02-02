import DiscoverAuction from './component';
import React from 'react';
import firebase from 'firebase';

interface Props {}

interface State {
  auctionItemsList?: Array<any>;
}

class Container extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      auctionItemsList: [],
    };
    console.log(' this props', this.props);
  }

  static navigationOptions = {
    title: 'Discover Auction',
  };
  componentDidMount() {
    this.getAuctionItems();
  }
  navigateToRegisterScreen = () => {
    this.props.navigation.navigate('SignUp');
  };
  getAuctionItems = () => {
    console.log('starting to upload....');

    firebase
      .database()
      .ref('auctionItems/')
      .on('value', snapshot => {
        var items = [];

        snapshot.forEach(child => {
          items.push({
            title: child.val().title,
            image_url: child.val().image_url,
            price: child.val().price,
            no_of_bids: child.val().no_of_bids,
          });
          console.log('Sanp shot', child.val().title);
        });
        this.setState({
          auctionItemsList: items,
        });

        console.log(' items', this.state.auctionItemsList);
      });
  };
  render() {
    return (
      <DiscoverAuction
        auctionItemsList={this.state.auctionItemsList}
        navigateToRegisterScreen={this.navigateToRegisterScreen}
      />
    );
  }
}

export default Container;
