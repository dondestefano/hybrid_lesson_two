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
        console.log("on is", onDisabled)
        console.log("off is", offDisabled)
    }

    return (
    <View style = {styles.deviceContainer}>
        <View style={{...styles.statusBox, backgroundColor: backgroundColor}}/>
        
        <Text style={ styles.deviceText }>{props.title}</Text>

        <View style={{...styles.buttonContainer}}>
            <Button title="On" disable={onDisabled} onPress={()=> {on() }
            }/>
            <Button title="Off" disable={offDisabled} onPress={()=> {off() }
            }
            />
        </View>
    </View>
    );
}

export default function Devices() {
    const [devicesOn, updateDevicesOn] = useState(0)
    return (
    <View style={{width: "100%"}}>
        <Text style={styles.text}>Devices</Text>
        <Device title = "Living Room Lamps" updateData = {updateDevicesOn}></Device>
        <Device title = "Heater" updateData = {updateDevicesOn}></Device>
        <Device title = "TV" updateData = {updateDevicesOn}></Device>
        <Text fontWeight="bold">Total Devices On: {devicesOn}</Text>
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
        justifyContent: "flex-start"
    },

    statusBox: {
        width: 20,
        height: 20,
        marginEnd: 8
    },

    buttonContainer: {
        flexDirection: "column",
        alignSelf: "center"
    }
  });