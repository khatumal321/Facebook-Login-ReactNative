import React from 'react';
import * as Facebook from 'expo-facebook';
import { StyleSheet, Text, Button, View, Alert, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from './../Config/firebase'

export default class Login extends React.Component {
  constructor() {
    super()
  }

  logIn = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync('2424831034261370');
      if (type === 'success' && token) {
        var credential = await firebase.auth.FacebookAuthProvider.credential(token);
        await firebase.auth().signInAndRetrieveDataWithCredential(credential)
          .then((result) => {
            console.log("Result==>", result.user)

         firebase.firestore().collection('chatappUser').add({name : result.user.displayName,photoURL : result.user.photoURL,uid :  result.user.uid})
         .then((response)=>{
           console.log(response)
           this.props.navigation.navigate('Main', result.user)
         }).catch((error)=>{
           console.log(error)
         })

          })
          .catch((err) => {
            console.log('Error==>', err)
          })

      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  }
  static navigationOptions = {
    header: null
  }
  render() {

    return (
      <ImageBackground source={require('./images/images.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
          <Text style={{ fontSize: 25, fontStyle: 'bold', margin: 15, justifyContent: 'center' }}>Welcome</Text>
          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 100 }}
              source={require('./images/download.png')}
            />
          </View>
          <View style={{ width: '75%' }}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this.logIn}
            >
              Login with Facebook
        </Icon.Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50
  },
});