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
      marginleft: 50,
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
        marginleft: 50,
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
    innerView: {
    width: 135,
    borderRadius: 20,
    height:170,
    marginLeft:40,
    marginRight:30,
    marginTop: 100,
    backgroundColor: 'lightgray', // Cor de fundo da view interna
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView2: {
    width: 135,
    borderRadius: 20,
    height:170,
    marginRight:10,
    marginTop: 100,
    backgroundColor: 'lightgray', // Cor de fundo da view interna
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView3: {
    width: 100,
    borderRadius: 20,
    height:170,
    marginRight:50,
    marginTop: 100,
    backgroundColor: 'lightgray', // Cor de fundo da view interna
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView7: {
    width: 110,
    borderRadius: 20,
    height:140,
    marginRight:20,
    marginLeft: 100,
    marginTop: 100,
    backgroundColor: 'lightgray', // Cor de fundo da view interna
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView8: {
    width: 110,
    borderRadius: 20,
    height:140,
    marginRight:20,
    marginTop: 100,
    backgroundColor: 'lightgray', // Cor de fundo da view interna
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView9: {
    width: 100,
    borderRadius: 20,
    height:140,
  
    marginRight:20,
    marginTop: 100,
    backgroundColor: 'lightgray', // Cor de fundo da view interna
    justifyContent: 'center',
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row', 
  },
  image: {
    borderRadius: 20,
    width: '100%', // Largura da imagem
    height: '100%', // Altura da imagem
    resizeMode: 'cover', // ou 'cover' para preencher a view que contém a imagem
  },
  textos:{
    color: 'white',
  },
  input: {
    width: '95%',
    height: 38,
    borderColor: 'gray',
    borderRadius: 5,     
    marginRight:90,                                    
    paddingHorizontal:20,
    marginTop: 10,
    backgroundColor: '#494c4e',
    color: 'white',
  },
  });