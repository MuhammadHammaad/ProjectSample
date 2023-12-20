import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import Colors from "../../Constants/Colors"
import BackHeader from '../../Components/UISupport/BackHeader'
const PostAnAddScreen = (props) => {



    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bgGray }}>
            <ScrollView style={{ height: "100%", width: "100%" }}>
                <BackHeader title="Post an Ad" onPress={() => props.navigation.goBack()} />
                {/* TOP HEADING */}
                <View style={{ height: 70, marginTop: 20, width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ height: "10%", width: "20%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ height: 10, width: 10, backgroundColor: Colors.blue, borderRadius: 10 }}></View>
                        <View style={{ height: 10, width: 10, backgroundColor: Colors.gray, borderRadius: 10 }}></View>
                        <View style={{ height: 10, width: 10, backgroundColor: Colors.gray, borderRadius: 10 }}></View>
                        <View style={{ height: 10, width: 10, backgroundColor: Colors.gray, borderRadius: 10 }}></View>
                        <View style={{ height: 10, width: 10, backgroundColor: Colors.gray, borderRadius: 10 }}></View>
                        <View style={{ height: 10, width: 10, backgroundColor: Colors.gray, borderRadius: 10 }}></View>
                    </View>

                    <View style={{ height: "70%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 18, color: Colors.black, fontWeight: "bold", }}>What are you listing?</Text>
                        <Text style={{ fontSize: 14, color: "gray", fontWeight: "400" }}>Select one of the option</Text>
                    </View>

                </View>

                <View style={{ width: "100%", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: "90%", }}>




                        {/* RENT TILE */}
                        <TouchableOpacity onPress={() => props.navigation.navigate("properRent", {
                            type: "property",
                            rent: true
                        })} style={Styles.tileContainer}>
                            <View style={{ height: "100%", width: "30%", justifyContent: "center", alignItems: "center" }}>
                                <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={require("../../Assets/Images/addrent.png")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", color: Colors.black, fontSize: 15 }}>Property for Rent</Text>
                            </View>
                        </TouchableOpacity>


                        {/* SALE TILE */}
                        <TouchableOpacity onPress={() => props.navigation.navigate("properRent", {
                            type: "property",
                            rent: false
                        })} style={Styles.tileContainer}>
                            <View style={{ height: "100%", width: "30%", justifyContent: "center", alignItems: "center" }}>
                                <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={require("../../Assets/Images/addBui.png")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", color: Colors.black, fontSize: 15 }}>Property for Sale</Text>
                            </View>
                        </TouchableOpacity>





                        {/* MOTOR TILE */}
                        <TouchableOpacity onPress={() => props.navigation.navigate("properRent", {
                            type: "car"
                        })} style={Styles.tileContainer}>
                            <View style={{ height: "100%", width: "30%", justifyContent: "center", alignItems: "center" }}>
                                <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={require("../../Assets/Images/adCar.png")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", color: Colors.black, fontSize: 15 }}>Motors</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>





            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    tileContainer: {
        height: 80, width: "100%",
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        borderRadius: 10,
        flexDirection: "row",
        marginBottom: 10

    }
})


export default PostAnAddScreen