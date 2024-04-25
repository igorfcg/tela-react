import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground,Image, TextInput, ViewBase} from 'react-native';
import styles from './src/constants/style';
export default function App() {
    const [text, setText] = useState('');
  
    const handleTextChange = newText => {
      setText(newText);
    };
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/ceu-noturno-estrelas-e-galaxias-no-ceu-ao-entardecer_494741-51453.jpg')} style={styles.backgroundImage}> 
      
      <Text numberOfLines={1} style={styles.h1text}> let's explore </Text>
      <Text style={styles.h2text}>the milk away galaxy</Text>
      <View style={styles.input2}>         
            <TextInput
        style={styles.input}
        placeholder="search for your favorite planet"
        value={text}
        onChangeText={handleTextChange}
      />
            </View>

      <View style={styles.row}>
      
      <View style={styles.innerView}> 
        <Image source={require('./src/assets/pluto.jpeg') } style={styles.image}/>

      </View> 
      <View style={styles.innerView2}>
        <Image source={require('./src/assets/neptune.jpeg') } style={styles.image}/>
      </View>
      
      </View>
      <View style={styles.row}>
      <View style={styles.innerView7}> 
        <Image source={require('./src/assets/uranus.jpeg') } style={styles.image}/>

      </View> 
      <View style={styles.innerView8}>
        <Image source={require('./src/assets/venuss.jpeg') } style={styles.image}/>
      </View>
      <View style={styles.innerView9}>
        <Image source={require('./src/assets/jupter.jpeg') } style={styles.image}/>
      </View>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>



  );

}

