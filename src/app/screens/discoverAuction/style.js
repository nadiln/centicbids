import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    // height: 400,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
  auctionItemContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    height: 200,
    marginBottom: 20,
  },
  auctionItemImageContainer: {
    flex: 1,
    height: 200,
  },
  auctionItemDetailContainer: {
    flex: 1,
    height: 200,
  },
  auctionItemTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
  auctionItemPrice: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
  bidNowButton: {
    marginTop: 15,
  },
  promoContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  promoText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
