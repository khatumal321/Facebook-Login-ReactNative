import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import Header from './Header'



class MainScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
      </View>
    )
  }
}

export default MainScreen


