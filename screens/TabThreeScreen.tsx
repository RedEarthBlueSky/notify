import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Greet, Person, GameList} from '../components/tstuts'
import { Text, View } from '../components/Themed';



export default function TabThreeScreen() {
  const personName = {
    title: 'Mr.',
    first: 'Ian',
    last: 'Salt'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <Person name={personName}/>
      <Greet 
        name='Ian' 
        messageCount={4} 
        isLoggedIn={true}
      />
      <GameList />
      <View 
        style={styles.separator} 
        lightColor="#eee" 
        darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabThreeScreen.tsx"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
