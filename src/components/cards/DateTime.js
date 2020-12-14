import _ from 'lodash';
import React, { useState, Fragment } from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';



const CalendarsScreen = props => {
  
LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul','Ago','Set.','Out.','Nov.','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
};

LocaleConfig.defaultLocale = 'pt';

  const diamarcado = day =>{
    props.alteraDia(day.dateString, {[day.dateString]: {selected: true, marked: true, selectedColor: '#466A8F'}});
  }

  const mostraSetinha = (direction) => {
    if(direction === 'left') {
    return <Image source={require('../../img/arrow_left.png')} style={{height:50, width:50}} resizeMode='center' />
  } else {
    return <Image source={require('../../img/arrow_right.png')} style={{height:50, width:50}} resizeMode='center' />
  }
  }

  const renderCalendarWithWeekNumbers = () => {
    return (
      <Fragment>
        <Calendar
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#F0F8FF',
            textSectionTitleColor: '#000',
            todayTextColor: 'red',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            monthTextColor: 'black',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 24,
            textDayHeaderFontSize: 16
          }}
          style={styles.calendar}
          enableSwipeMonths={true}
          minDate={'2012-05-10'}
          maxDate={'2022-12-31'}
          onDayPress={day => diamarcado(day)}
          markedDates={props.diaMarcado}
          renderArrow={mostraSetinha}
        />
      </Fragment>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderCalendarWithWeekNumbers()}
    </ScrollView>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
    width: '100%',
    height: 350
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});