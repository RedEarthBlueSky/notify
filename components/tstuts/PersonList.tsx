import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const PersonList = () => {
    return (
    <View style={styles.flatContainer}>
      <FlatList
        data={[
          {key: 'Bruce Wayne'},
          {key: 'Clark Kent'},
          {key: 'Princess Dianna'},
          {key: 'Snoop Dog'},
        ]}
        renderItem={({item}) => 
            <View style={{height: 20}}>
                <Text style={styles.item}>{item.key}</Text>
            </View>
        }
      />
    </View>
    )
}

//  how make flat list height accomodate number of objects
const styles = StyleSheet.create({
    flatContainer: {
     padding: 0,
    //  backgroundColor: 'blue',
     marginBottom: 0,
     height: 80,
    },
    item: {
      padding: 0,
      fontSize: 14,
    },
  });

export {PersonList}