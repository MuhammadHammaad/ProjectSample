import React from "react"
import {
    Text, View, TextInput, TouchableOpacity, StyleSheet
} from "react-native"

import IoIcon from "../Icon/IoIcon"
import Colors from "../../Constants/Colors"
const MapLocationContainer = props => {
    return (
        <View style={{ marginVertical: 5 }}>
            <Text style={{ color: Colors.black, fontWeight: "600" }}>{props.formTitle}</Text>
            <TouchableOpacity onPress={props.onPicker} style={Styles.container}>
                <View style={{ height: 50, width: "85%", justifyContent: "center", }}>
                    <Text style={{ fontSize: 15, color: "gray", marginLeft: 10, width: "100%", height: "80%" }}>{props.pickValue}</Text>
                </View>

                <View style={{ height: 50, width: "15%", justifyContent: "center", alignItems: "center" }}>
                    <IoIcon name="location" size={15} color="black" />
                </View>
            </TouchableOpacity>
        </View>

    )
}
const Styles = StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "lightgray",
        flexDirection: "row",
        marginTop: 5,

    },
    textInput: {
        marginLeft: 10,
        height: 50,
        width: "95%",
        marginRight: 20,
        color: Colors.black
    },
    clickStyle: {
        height: 50,
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    containerDescription: {
        height: 80,
        width: "100%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "lightgray",
        flexDirection: "row",
        marginTop: 5
    }
})
export default MapLocationContainer