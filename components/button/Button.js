import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { styles } from './styles.js'

const Button = ({ navigation, icon, title, onPress, width, height }) => {
    return (
        <>
            <TouchableHighlight
                onPress={onPress}
                underlayColor='#fff'
                style={styles.navigationHubTouchable}
            >
                <View style={[styles.navigationHubBack, { width: width, height: height }]}>
                    {icon}
                    <Text style={styles.navigationHubButtonText}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        </>
    )
}


export default Button