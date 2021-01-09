import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const livingRoom = require("./assets/living-room.png")
const bed = require("./assets/bed.png")
const kitchen = require("./assets/kitchen.png")

const Box = ({ icon, text }) => {
    return (
        <View style={styles.boxStyle}>
            <Image source={icon} style={{ width: 60, height: 60 }}/>
            <Text style={{fontSize: 12, marginVertical: 8}}>{text}</Text>
        </View>
    )
};

const BoxRow = ({ style}) => {
    return (
        <View style ={style}>
            <Box icon={livingRoom} text = {"Living Room"}/>
            <Box icon={bed} text = {"Bedroom"}/>
            <Box icon={kitchen} text = {"Kitchen"}/>
        </View>
    )
};


export default function Rooms() {
  return (
    <View style={{width: "100%"}}>
        <Text style={styles.text}>Rooms</Text>
        <BoxRow style = {styles.boxRow}/>
    </View>
  );
}

const styles = StyleSheet.create({
    boxStyle: {
      height: 100,
      width: 80,
      alignItems:"center",
      flexDirection: "column",
      justifyContent: "flex-end",
      textAlign: "center",
      backgroundColor: "#00b9bc",
    },

    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },

    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
  });