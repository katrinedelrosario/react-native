//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const arrData = [
  {id: 1, title: 'item 1'},
  {id: 2, title: 'item 2'},
  {id: 3, title: 'item 3'},
]

const listItem = () => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTxt}></Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headline}>portfolio</Text>
        <Image source={require('./assets/logo-icon.png')}style={styles.logo}></Image>
      </View>
      <View style={styles.main}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'black'
  },
  header: {
    backgroundColor: 'darkcyan',
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'space-between',


  },
  headline: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  logo: {
    height: 70,
    width: 40,
    marginBottom: 20
  },
  main: {
    height: 500,
    padding: 10
  }
});
