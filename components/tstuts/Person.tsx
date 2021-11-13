import React from 'react'
import { View, Text } from 'react-native'

import { PersonProps } from './types'

//  typing an object prop...

const Person = (props: PersonProps) => {
    const { title, first, last } = props.name
    return ( 
        <View>
            <Text>{title} {first} {last}</Text>
        </View> 
    )
}

export {Person}