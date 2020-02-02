import {Image, ScrollView, Text, View} from 'react-native';

import {Button} from 'react-native';
import React from 'react';
import styles from './style.js';

interface Props {
  auctionItemsList?: Array<any>;
  navigateToRegisterScreen?: () => void;
}

const DiscoverAuction: React.FunctionComponent<Props> = ({
  auctionItemsList,
  navigateToRegisterScreen,
}) => {
  console.log('ss', auctionItemsList);

  return (
    <View style={styles.container}>
      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>
          Still you didn't registered for the world best Auction platform?
        </Text>
        <Button
          onPress={() => navigateToRegisterScreen()}
          title="Register for Free"
          type="clear"
        />
      </View>

      <ScrollView>
        {auctionItemsList.map((l, i) => (
          <View style={styles.auctionItemContainer}>
            <View style={styles.auctionItemImageContainer}>
              <Image
                style={{width: 150, height: 200}}
                source={{uri: l.image_url}}
              />
            </View>
            <View style={styles.auctionItemDetailContainer}>
              <Text style={styles.auctionItemTitle}>{l.title}</Text>
              <Text style={styles.auctionItemPrice}>
                $<Text>90.8</Text>
              </Text>
              <View style={styles.bidNowButton}>
                <Button color={'red'} title={'Bid Now'} />
              </View>
            </View>
          </View>
          //   <ListItem
          //     key={i}
          //     leftAvatar={{source: {uri: l.avatar_url}}}
          //     title={l.name}
          //     subtitle={l.subtitle}
          //     bottomDivider
          //   />
        ))}
      </ScrollView>
    </View>
  );
};

export default DiscoverAuction;
