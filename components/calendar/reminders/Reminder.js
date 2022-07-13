import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import ChevronIconRight from "../../../assets/icons/ChevronIconRight";
import LivroIconOutline from "../../../assets/icons/LivroIconOutline";

const Reminder = ({ type, title, description, time }) => {
    return (
        <>
            <View style={styles.timeReminder}>
                {/* Adicionar tempo vindo do componente pai */}
                <Text style={styles.timeText}>9:00 AM</Text>
                <View style={styles.divider} />
            </View>
            <TouchableOpacity style={styles.reminder}>
                <View style={styles.typeReminder}>
                    <LivroIconOutline />
                </View>
                <View style={styles.bodyReminder}>
                    <Text style={styles.typeText}>{title}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    <ChevronIconRight color="rgba(0, 0, 0, 0.3)" />
                </View>
            </TouchableOpacity> 
        </>
    )
}

const styles = StyleSheet.create({
    reminder: {
        borderWidth: 1,
        borderBottomWidth: 4,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        width: '90%',
        height: 75,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    bodyReminder: {
        marginLeft: 20,
        width: '75%'
    },
    typeReminder: {
        backgroundColor: '#4B089F0D',
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    typeText: {
        fontFamily: 'Nunito-Bold',
        color: '#000'
    },
    descriptionText: {
        fontFamily: 'Nunito-Regular',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    timeReminder: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 20,
        alignItems: 'center', 
        alignSelf: 'center'
    },
    timeText: {
        fontFamily: 'Nunito-Regular',
        fontSize: 12
    },
    divider: {
        height: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        width: '70%', 
        marginLeft: 20
    }
})

export default Reminder;