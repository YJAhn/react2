import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import PropTypes from "prop-types"

const weatherCases={
    Rain:{
        colors:["#00c6fb","#005bea"],
        title:"Raining",
        subtitle:"비",
        icon:"weather-rainy"
    },
    Clear: {
      colors: ["#FEF253", "#FF7300"],
      title: "Sunny",
      subtitle: "맑음",
      icon: "weather-sunny"
    },
    Thunderstorm: {
      colors: ["#00ECBC", "#007ADF"],
      title: "Thunderstorm",
      subtitle: "천둥번개",
      icon: "weather-lightning"
    },
    Clouds: {
      colors: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "구름",
      icon: "weather-cloudy"
    },
    Snow: {
      colors: ["#7DE2FC", "#B9B6E5"],
      title: "Snow",
      subtitle: "눈",
      icon: "weather-snowy"
    },
    Drizzle: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "이슬비",
      icon: "weather-hail"
    },
    Haze: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "Haze",
      subtitle: "실안개",
      icon: "weather-hail"
    },
    Mist: {
      colors: ["#D7D2CC", "#304352"],
      title: "Mist!",
      subtitle: "안개",
      icon: "weather-fog"
    }
}


function Weather({temp, weatherName}){
    return(
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}
    >
        <View style={styles.upper}>
            <MaterialCommunityIcons 
                color="white" 
                size={144} 
                name={weatherCases[weatherName].icon}
            />
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>
    </LinearGradient>)
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    weatherName:PropTypes.string.isRequired
}




export default Weather;

const styles =StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    temp:{
        marginTop:10,
        fontSize: 48,
        backgroundColor:"transparent",
        color:"white"
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:25        
    },
    title:{
        fontSize: 38,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:10,
        fontWeight: "300"

    },
    subtitle:{
        fontSize: 24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:24
    }
    


})
