import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function ModalFilme(props){
   return(
    <View style={folhaestilo.container} >
       
        <View style={folhaestilo.modalContainer}>

       <TouchableOpacity style={folhaestilo.btvoltar}  onPress={props.voltar} >
             <Text style={{color: "#fff", fontSize:15}} >Voltar</Text>
        </TouchableOpacity> 

        <Text style={folhaestilo.titulo}>{props.filmes.nome}</Text>    
        <Text style={folhaestilo.sinopse}>Sinopse:</Text>
        <Text style={folhaestilo.descricao}>{props.filmes.sinopse}</Text>
 
        </View>          

    </View>
   ) 
}
const folhaestilo = StyleSheet.create({
  container:{
    marginLeft:10,
    marginRight:10,
    flex:1,
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  modalContainer:{
    height: "80%",
    backgroundColor: "#121212",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
   btvoltar:{
    backgroundColor: "red",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
   },
   titulo:{
    textAlign: "center",
    color: "#fff",
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
    },
   
    sinopse:{
        color: "#fff",
        fontSize:18,
        marginBottom: 8,
        marginLeft: 10
    },

    descricao:{
        color: "#fff",
        marginBottom: 8,
        marginLeft:10,
    }



})