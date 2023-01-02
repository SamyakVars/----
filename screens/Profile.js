import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
  } from 'react-native';



export default class App extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text> Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})