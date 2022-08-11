import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles.js'

const Button = ({ navigation, icon, title, onPress, width, height, fontSize, borderRadius, oneButton, buttonHome }) => {
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
                            style={[styles.navigationHubBack, { width: width, height: height, borderRadius: borderRadius }]}
                            colors={['#3C368C', '#D02F60' ]}
                            start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                        >
                        </LinearGradient>
                    </View>
                    <LinearGradient
                        style={[styles.navigationHubBack, { 
                            width: width, 
                            height: height, 
                            borderRadius: borderRadius, 
                            justifyContent: oneButton ? 'flex-start' : 'center',
                            padding: oneButton ? 20 : null
                        }]}
                        colors={['#3C368C', '#D02F60' ]}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    >
                        {icon}
                        <Text style={[styles.navigationHubButtonText, { fontSize: fontSize, marginTop: icon ? 10 : null, marginLeft: oneButton ? 20 : null }]}>
                            {title}
                            {buttonHome && <Text style={{
                                fontSize: 14,
                                fontFamily: 'Nunito-SemiBold',
                                color: 'rgba(255, 255, 255, 0.7)'
                            }}>{`\n`}Vídeos, Animações, Videoaulas</Text>}
                        </Text>
                    </LinearGradient>
                </View>

            </TouchableHighlight>
        </>
    )
}


export default Button