import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js'
import Rooms from './Rooms.js'
import Devices from './Devices.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Rooms/>
      <Devices/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 18
  },
});
