import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput,Button, View} from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';

const DATA = [
{
  id: '1',
  title: "Manhã",
},
{
  id: '2',  
  title: "Tarde",
},
{
  id: '3',
  title: "Noite",
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);



const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [chosenOption, setChosenOption] = useState('Masculino');

  const options = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
  ]

  const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#F2D7EE" : "#A5668B";
  const color = item.id === selectedId ? 'black' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        />
      );
  };

return (
  <SafeAreaView style={styles.container}>

    <View style={styles.container2}>
      
      <TextInput style={styles.input} placeholder="Nome"/>
      
      <View style={styles.row2}>

       
      <DatePicker
      style={styles.date}    
        onDateChange={
          this.selectDate
        }
      />

        <RadioForm
        style={styles.teste}
          radio_props={options}
          initial={0}
          onPress={(value) => {
          setChosenOption(value);
          }}
        />

      </View>

      <TextInput style={styles.input}  placeholder="Instituição"/>

      <View style={styles.row2}>
        <TextInput style={styles.input2}  placeholder="Módulo"/>

        <TextInput style={styles.input2}  placeholder="Curso"/>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

     <View style={styles.espaco}></View>

      <View >
        <Button 
          title= 'Enviar'
          color= '#0E103D'
        />
        <View style={styles.espaco}>
        
        </View>

        <Button
          title= 'Apagar'
          color= '#0E103D'
        />
      </View>

      
    </View>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#69306D',
  },

  container2:{
    marginHorizontal:20,
    marginVertical:30,
  },

  row2:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
    marginTop:20,
  },

  item: {
  padding: 12,
  marginVertical: 6,
  marginHorizontal: 12,
  textAlign: "center"
  },

  title: {
  fontSize: 15,
  },

  input: {
    padding:15,
    fontSize:16,
    backgroundColor:'#F2D7EE',
  },

  input2: {
    fontSize:16,
    backgroundColor:'#F2D7EE',
    width:140,
    padding:10,
    textAlign:"center"

  },
  date:{
     backgroundColor:'#F2D7EE',

  },
  espaco:{
    padding:10
  },
  botao:{
    
  },
  teste:{
    textColor:'white'
  }
  });

export default App;