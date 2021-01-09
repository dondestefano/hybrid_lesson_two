import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const icon = require("./assets/house.png")

export default function Header() {
  return (
    <View style={styles.header}>
        <Image source={icon} style={{ width: 50, height: 50, marginRight: 15 }}/>
        <Text style={styles.text}>SmartHome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "flex-start",
      width: "100%",
      height: 70,
      alignItems:"center",
      marginVertical: 8
    },

    text: {
        color: "#00b9bc",
        fontWeight: "bold",
        fontSize: 18
    }
  });