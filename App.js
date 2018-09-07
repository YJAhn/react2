import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather"

const API_KEY="8042367a40d903407a2eee2c0cfa759a";

export default class App extends React.Component {
  state={
    isLoaded: false,
    error:null,
    temperature:null,
    name:null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position=>{ 
        this._getWeather(position.coords.latitude,position.coords.longitude)
      },
      error=>{
        this.setState({
          error:error
        })
      }  
    );
  }

  _getWeather=(lat, lon)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response=>response.json())
    .then(json=>{
      console.log(json);
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    })
  }

  render() {
    const {isLoaded, error, temperature, name}=this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded? <Weather temp={Math.floor(temperature - 273.15)} weatherName={name}/>:(
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the beautiful weather</Text>
          {error?<Text style={styles.errorText}>{error}</Text>:null}
        </View>
      )}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent"
  },
  loading:{
    flex:1,
    backgroundColor:'#fdf6aa',
    justifyContent:"flex-end",
    paddingLeft:25
  },
  loadingText:{
    fontSize:38,
    marginBottom:24
  }
});

