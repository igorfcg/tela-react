import { StyleSheet, backgroundColor } from 'react-native';
import { height, width } from "./dimensions"
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',


    },
    h1text: {
      marginleft: 20,
      marginRight: 120 ,
        fontSize: 25,
        marginTop:'20px',
        alignItems: 'top',
        color: 'white',
        fontWeight: 'bold',
      },
      h2text: {
        color: 'white',
        marginRight: 140,
        marginleft: 20,
        fontSize: 3, 
      },
    backgroundImage: {
      alignItems: 'center',
      width: width,
      height: height,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  
  });