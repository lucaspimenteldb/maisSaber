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
                <View>
                    <View style={{ position: 'absolute', top: 5 }}>
                        <LinearGradient
                            style={[styles.navigationHubBack, { width: width, height: height }]}
                            colors={['#3C368C', '#D02F60' ]}
                            start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                        >
                        </LinearGradient>
                    </View>
                    <LinearGradient
                        style={[styles.navigationHubBack, { width: width, height: height }]}
                        colors={['#3C368C', '#D02F60' ]}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    >
                        {icon}
                        <Text style={styles.navigationHubButtonText}>
                            {title}
                        </Text>
                    </LinearGradient>
                </View>
            </TouchableHighlight>
        </>
    )
}


export default Button