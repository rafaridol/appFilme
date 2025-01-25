import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";

// Imports componentes criados
import ModalFilme from "../Modal";

export default function Filmes({ data }) {
        const [visibleModal, setVisibleModal] = useState(false);
        return (

                <View>
                        <View style={folhadeestilo.card}>

                                <View>
                                        <Text style={folhadeestilo.titulo}> {data.nome} </Text>
                                        <Image
                                                source={{ uri: data.foto }}
                                                style={folhadeestilo.capafilme}
                                        />
                                </View>

                                <View style={folhadeestilo.areabt}>
                                        <TouchableOpacity style={folhadeestilo.bt} onPress={() => setVisibleModal(true)}>

                                                <Text style={folhadeestilo.textbt}>Leia Mais</Text>

                                        </TouchableOpacity>
                                </View>

                        </View>

                        <Modal transparent={true}  animationType="slide" visible={visibleModal}>

                              <ModalFilme filmes={data} voltar={ () => setVisibleModal(false)}/>  
                        
                        </Modal>

                </View>



        );


}
const folhadeestilo = StyleSheet.create({
        card: {
                backgroundColor: '#fff',
                margin: 15,
                elevation: 2
        },
        capafilme: {
                height: 250,
                zIndex: 2,
        },
        titulo: {
                padding: 15,
                fontSize: 18
        },
        areabt: {
                alignItems: 'flex-end',
                marginTop: -45,
                zIndex: 9
        },
        bt: {
                width: 100,
                backgroundColor: '#0d3bf2',
                opacity: 1,
                padding: 8,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5
        },
        textbt: {
                color: '#fff',
                textAlign: 'center'
        }

})
