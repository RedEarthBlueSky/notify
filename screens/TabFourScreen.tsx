import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Greet, Person} from '../components/tstuts'
import { Text, View } from '../components/Themed';



const TabFourScreen = () => {
  const personName = {
    title: 'Mr.',
    first: 'James',
    last: 'Santos'
  }
        
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Four</Text>
      <Person name={personName}/>
      <Greet 
        name={personName.first} 
        messageCount={4} 
        isLoggedIn={true}
      />
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

export default TabFourScreen
