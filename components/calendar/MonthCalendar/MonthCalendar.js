import React, { useState } from "react";
import { View } from "react-native";
import {Calendar, LocaleConfig} from 'react-native-calendars';

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

const MonthCalendar = ({ }) => {
    const [selectedDay, setSelectedDay] = useState();

    const onDayPress = (day) => {
        console.log(day)
        setSelectedDay(day.dateString);
    };

    return (
        <View>
            <Calendar
                firstDay={1}
                renderArrow={direction => direction === 'right' ? <ChevronIconRight color="rgba(0, 0, 0, 0.3)" /> : <ChevronIconLeft color="rgba(0, 0, 0, 0.3)" />}
                theme={{ 
                    monthTextColor: '#27272B',
                    textMonthFontFamily: 'Nunito-Bold',

                    textDayFontFamily: 'Nunito-Regular',
                    dayTextColor: 'rgba(0, 0, 0, 0.6)',

                    arrowColor: 'gray',

                    selectedDayBackgroundColor: '#3B368C',
                    selectedDayTextColor: '#fff',

                }}
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDay]: {
                        selected: true,
                        selectedColor: '#3B368C',
                        disableTouchEvent: true,
                    },
                }}
            />
        </View>
    )
}

export default MonthCalendar;