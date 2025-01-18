import React,{useState,useEffect}  from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/service/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setfilmes] = useState([]);

  useEffect(() =>{
    async function loadfilmes() {
      const response = await api.get('/r-api/?api=filmes');
      console.log(response.data);
      setfilmes(response.data);
    };  
     
    loadfilmes();
    
  },[]);

  return(
    <View>
        <FlatList
          
         data={filmes}
         keyExtractor={ item =>  String(item.id)}
         renderItem={({ item })  => <Filmes data={item}/>}
        />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
