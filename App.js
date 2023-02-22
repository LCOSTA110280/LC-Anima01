import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert,Animated } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      larAnimada:new Animated.Value(150),
      altAnimada:new Animated.Value(50),

    }
    Animated.parallel([
      Animated.timing(

        this.state.altAnimada,
        {
          toValue:100,
          duration:2000,
          
        },

      ),
        Animated.timing(

        this.state.larAnimada,
        {
          toValue:300,
          duration:1000,
          
        }

      )
    ]).start();

  }



  render(){  
  return (
    <View style={styles.container}>
      <Animated.View style={{
            height:this.state.altAnimada,
            width:this.state.larAnimada,
            backgroundColor:'blue',
            alignItems:'center',
            justifyContent:'center',

      }}>
        <Text style={styles.textoCarregando}>Carregando....</Text>
      </Animated.View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  viewanima:{

  },
  textoCarregando:{
    fontSize:22,
    color:'white',
  }

  
})

export default App;

