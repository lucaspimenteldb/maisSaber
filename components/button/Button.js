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
                    colors={['#3C368C', '#D02F60' ]}
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