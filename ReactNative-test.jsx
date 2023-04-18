
import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";


const App = () => {

    const [ItCamp, setItCamp] = useState(['']);

    const ItCampFakeData = [
        {
            Id : '1',
            title : 'BEAVERSITE',
            description : 'เผ่าแห่งการสร้างสรรค์',
            color : '#d7391a'
        },
        {
            Id : '2',
            title : 'KYUBI-TA',
            description : 'เผ่าที่ทำหน้าที่เก็บเกี่ยวพลังแห่งความฝัน',
            color : '#e79627'
        },
        {
            Id : '3',
            title : 'MOBILANT',
            description : 'เผ่าแห่งการเปลี่ยนแปลง',
            color : '#9f5ef5'
        },
        {
            Id : '4',
            title : 'BUNNYGAMER',
            description : 'เผ่าแห่งจินตนาการและการละเล่น',
            color : '#7df642'
        },
        {
            Id : '5',
            title : 'NETAWOLF',
            description : 'เผ่าที่ทำหน้าที่ลำเลียงพลังแห่งความฝัน',
            color : '#2c70fb'
        },
    ];

    React.useEffect( () => {
         setItCamp(ItCampFakeData)
    }, [''])
  return (
    <SafeAreaView style={{flex : 1}}>
      <View style={[styles.container, {flex : 1}]}>
        <Text style={styles.Text}>
          All Camps!
        </Text>
        <FlatList
          data={ItCamp}
          renderItem={(item) => 
            <Camp
                title={item.item.title}
                description={item.item.description}
                color={item.item.color}
                id = {item.item.Id}
            />}
          keyExtractor={item => item.Id}
        />

      </View>
    </SafeAreaView>
  );
};


const Camp = (props) => {
  return (
    <View
      
      style={{
        padding: 5,
        margin: 5,
        // boxShadow: '2 2 5 rgba(0,0,0,0.5)',
        borderRadius: 10,
        // display: !props.hide && 'none',
      }}
    >
      <View style={{flexDirection: 'column'}}>
        <Text style={{color : props.color}}>
          {props.id}&nbsp;{props.title}
        </Text>
        <Text>
          {props.description}
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container : {
    padding: 10,
  },
  Text : {
    fontSize : 18,
    fontWeight : 'bold',
  }
})

export default App;