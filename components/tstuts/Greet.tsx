import React from 'react'
import { Text, TextPropTypes, View } from 'react-native'

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
    const { name, messageCount, isLoggedIn } = props
    return (
        <View>
            <Text>
            {
                isLoggedIn ? 
                `
                Welcome, ${name}, you've ${messageCount} messages!
                `
                : 
                'Welcome Guest.'
            }
                
            </Text>
        </View>
    )
}

export default Greet