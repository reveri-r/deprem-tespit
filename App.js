import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';

import {ActivityIndicator, FlatList, Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible,] = useState(false);
 const [isLoading, setLoading] = useState(true);
 const [data, setData] = useState([]);

 const getMovies = async () => {
  
    try {
      const response = await fetch('https://api.orhanaydogdu.com.tr/deprem/kandilli/live');
      const json = await response.json();
      setData(json.result);
   
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    
  }, []);
  return (
    
    <View style={styles.container}>

<Text style={styles.title}>Son Depremler</Text>
        <ScrollView>
       
      
        
        {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
       
            <View style={styles.sonDepremler}>
              <Text style={styles.contextTitle}>
                Deprem Yeri: {item.title}
             </Text>
             <Text style={styles.contextTitle}>
               Deprem Şiddeti: {item.mag}
             </Text>
             <Text style={styles.contextTitle}>
               Deprem Zamanı: {item.date}
             </Text>

             <Text style={styles.contextTitle}>
               Derinlik: {item.depth} KM
             </Text>

             <Text style={styles.contextTitle}>
               Etkilenebilecek Şehirler: {item.location_properties.closestCity.name}
             </Text>
            
             
            </View>
           
            
          )}
        />
      )}

        </ScrollView>
        
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#ebebeb',
  },

  sonDepremler: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: 7,
    marginTop:15,
    padding: 25,
    backgroundColor: '#f5f5fa',


  },

  depremCity: {
    fontWeight: '500',
    color: '#000'
  },

  title: {
    marginTop:20,
    marginBottom:10,
    fontSize: 20,
    fontWeight: '700',
    color: '#0f0c0c',
  },

  cityDanger: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    padding: 35,
    backgroundColor: '#f2f2f2',
    shadowColor: '#000'
  },

  dangerTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0f0c0c',
  },

  contextTitle: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
    color: '#383838',
  },



  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 13,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});


/*
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

    
    const url = "https://api.orhanaydogdu.com.tr/deprem/kandilli/live"
for(let i = 1; i<=10; i++){
    $.get({url}, (data, status) => {
  console.log(data["result"][i]);
  document.getElementById("item" + i).innerHTML =  
  "Yer: " + data["result"][i]["title"] + "<br>" + 
  "Deprem Boyutu: " + data["result"][i]["mag"] + "<br>"+ 
  "Tarih: " + data["result"][i]["date_day"]+ "<br>" + "Saat: " + data["result"][i]["date_hour"];

});
}

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

window.onload = timedRefresh(10000);


 

*/