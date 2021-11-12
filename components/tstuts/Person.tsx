import React from 'react'
import { View, Text } from 'react-native'

//  typing an object prop...

type PersonProps = {
    title: string,
    first: string, 
    last: string,
}

const Person = (props: PersonProps) => {
    const { title, first, last } = props.name
    return ( 
        <View>
            <Text>{title} {first} {last}</Text>
        </View> 
    )
}

export {Person}