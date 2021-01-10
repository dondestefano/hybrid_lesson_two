import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';


const Device = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('red')
    const [onDisabled, setOnDisabled] = useState(false)
    const [offDisabled, setOffDisabled] = useState(true)

    function on() {
        setBackgroundColor("green")
        setOnDisabled(true)
        setOffDisabled(false)
        props.updateData(prevCount => prevCount + 1)
    }

    function off() {
        setBackgroundColor("red")
        setOnDisabled(false)
        setOffDisabled(true)
        props.updateData(prevCount => prevCount - 1)
    }

    return (
    <View style = {styles.deviceContainer}>
        <View style = {styles.indicatorContainer}>        
            <View style={{...styles.statusBox, backgroundColor: backgroundColor}}/>
    
            <Text style={ styles.deviceText }>{props.title}</Text>
        </View>


        <View style={{...styles.buttonContainer}}>
            <Button title="On" disabled={onDisabled} onPress={()=> {on() }
            }/>
            <Button title="Off" disabled={offDisabled} onPress={()=> {off() }
            }
            />
        </View>
    </View>
    );
}

export default function Devices() {
    const [devicesOn, updateDevices] = useState(0)
    return (
    <View style={{width: "100%"}}>
        <Text style={styles.text}>Devices</Text>
        <Device title = "Living Room Lamps" updateData = {updateDevices}></Device>
        <Device title = "Heater" updateData = {updateDevices}></Device>
        <Device title = "TV" updateData = {updateDevices}></Device>
        <Text style={{fontWeight: "bold", fontSize: 15}} fontWeight= "bold" fontWeight="25">Total Devices On: {devicesOn}</Text>
    </View>
    );
  }

  Device.defaultProps = {
    title: "I'm a device",
  };
  
  Device.propTypes = {
    title: PropTypes.string,
  };

  const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 8,
        flexGrow: 1
    },

    deviceText: {
        fontSize: 18,
        textAlign: "center"
    },

    deviceContainer: {
        width: "100%",
        backgroundColor: "#FFFF9E",
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        marginBottom: 12,
        justifyContent: "space-between"
    },

    statusBox: {
        width: 20,
        height: 20,
        marginEnd: 12
    },

    indicatorContainer: {
        flexDirection: "row", 
        alignItems: "center",
        padding: 8

    },

    buttonContainer: {
        flexDirection: "column",
        alignSelf: "flex-end",
    }
  });