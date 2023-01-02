import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';


export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
 
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
              <Image
                source={require('../assets/post.jpeg')}
                style={styles.postImage}>
                {' '}
              </Image>
            </View>

            <View style={styles.likeContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} color={'white'} size={RFValue(30)} />
                <Text style={styles.likeText}> 12k </Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  authorText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(18),
    color: 'white',
  },
  authorContainer: {

  },
  captionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(14),
    color: 'white',
  },
  likeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButton: {
    width: RFValue(150),
    backgroundColor: "red",
    borderRadius: RFValue(25),
    height: RFValue(40),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: RFValue(10),
    flexDirection: "row",
  },
  likeText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    color: 'white',
  }
});
