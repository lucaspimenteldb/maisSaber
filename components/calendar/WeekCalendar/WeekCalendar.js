import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {WeekCalendar, LocaleConfig} from 'react-native-calendars';

import ChevronIconLeft from '../../../assets/icons/ChevronIconLeft';
import ChevronIconRight from '../../../assets/icons/ChevronIconRight';

LocaleConfig.locales['pt-BR'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan. ','Fev.','Mar','Abril','Mai','Jun','Jul.','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
    dayNamesShort: ['Seg','Ter','Qua','Qui','Sex','Sab','Dom'],
    today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-BR';

const CalendarioSemanal = ({ props }) => {
    const [selectedDay, setSelectedDay] = useState();

    const onDayPress = (day) => {
        setSelectedDay(day.dateString);
    };

    return (
        <View>
            <View style={styles.calendarHeaderArea}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>                    
                    <Text style={styles.calendarHeaderTitle}>Julho de 2022</Text>
                </View>
            </View>
            <WeekCalendar
                renderArrow={direction => direction === 'right' ? <ChevronIconRight color="rgba(0, 0, 0, 0.3)" /> : <ChevronIconLeft color="rgba(0, 0, 0, 0.3)" />}
                theme={{ 
                    monthTextColor: '#27272B',
                    textMonthFontFamily: 'Nunito-Bold',

                    textDayFontFamily: 'Nunito-Regular',
                    dayTextColor: 'rgba(0, 0, 0, 0.6)',

                    arrowColor: 'gray',

                    selectedDayBackgroundColor: '#ED4B49',
                    selectedDayTextColor: '#fff',

                }}
                onDayPress={onDayPress}
                
            />

            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 20}}>
                <TouchableOpacity style={styles.buttonChevronWeek}>
                    <ChevronIconLeft color="#ED4B49" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChevronWeek}>
                    <ChevronIconRight color="#ED4B49" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    calendarHeaderArea: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 20
    },
    calendarHeaderTitle: {
        fontSize: 16, 
        fontFamily: 'Nunito-Bold', 
        color: '#27272B'
    },
    calendarHeaderChevrons: {
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 5, 
        backgroundColor: 'rgba(55, 91, 221, 0.10)',
        width: 28, 
        height: 28,
        borderRadius: 99
    },
    buttonChevronWeek: {
        borderRadius: 99,
        borderWidth: 1.5,
        borderColor: '#ED4B49',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
})

export default CalendarioSemanal; 