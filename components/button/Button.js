import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles.js'

const Button = ({ navigation, icon, title, onPress, width, height }) => {
    return (
        <>
            <TouchableHighlight
                onPress={onPress}
                underlayColor='#fff'
                style={styles.navigationHubTouchable}
            >
                <LinearGradient 
                    style={[styles.navigationHubBack, { width: width, height: height }]}
                    colors={['#E9404F', '#ED5E30' ]}
                >
                    {icon}
                    <Text style={styles.navigationHubButtonText}>
                        {title}
                    </Text>
                </LinearGradient>
            </TouchableHighlight>
        </>
    )
}


export default Button