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
                Hi, ${name}, your ${messageCount} favorite games!
                `
                : 
                'Welcome Guest.'
            }
                
            </Text>
        </View>
    )
}

export {Greet}