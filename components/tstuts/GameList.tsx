import React from 'react'
import { StyleSheet, View, Text, FlatList, Image, ScrollView } from 'react-native'

import { data } from './data'

const GameList = () => {
    return (
      <View style={styles.gameContainer}>
				<ScrollView>
				{
					data.map((item) => (
						<View>
							<Text>{item.title}</Text>
							<Text>{item.developer}</Text>
							{
								item.images.map(image =>[
									<Image 
										style={styles.image}
										source={{uri: image}}
									/>
								])
							}
          </View>
        ))
       }
				</ScrollView>
    	</View>
  )
}

const styles = StyleSheet.create({
    gameContainer: {
        padding: 0,
				height: 300,
    },
		image: {
			padding: 0,
			margin: 0,
			width: 120,
			height: 90,
		}
})

export {GameList}