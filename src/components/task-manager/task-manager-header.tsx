import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, Platform, StyleSheet, Button, Alert } from 'react-native';
import { convertDateToString, convertTimeToString } from '../../utils';
import { Tourch } from '../tourch.component';

export const TaskManagerHeader = () => {

    const [date, setDate] = useState(new Date());
    const [isShowDatepicker, setIsShowDatepicker] = useState(false);
    const [isShowTimepicker, setIsShowTimepicker] = useState(false);
    const [show, setShow] = useState(false);

    const onDateChange = (event: any, selectedDate: any) => {
        setIsShowDatepicker(false); // Hide picker after selection
        if (selectedDate) {
            Alert.alert(convertDateToString(selectedDate));
            setDate(selectedDate);
        }
    };

    const onTimeChange = (event: any, selectedTime: any) => {
        setIsShowTimepicker(false); // Hide picker after selection
        if (selectedTime) {
            Alert.alert(convertTimeToString(selectedTime));
            setDate(selectedTime);
        }
    };

    const showDatepicker = () => {
        setIsShowDatepicker(true);
    };

    const showTimepicker = () => {
        setIsShowTimepicker(true);
    };

    // return (
    //     <View>
    //         <Text>Task Manager Header</Text>
    //         <DateTimePicker value={new Date()} />
    //     </View>
    // )
    return (
        <View>
            <Tourch
                title={'📅  ' + convertDateToString(date)}
                onPress={showDatepicker}
                tourchStyles={{}}
            />
            {isShowDatepicker &&
                <DateTimePicker
                    style={{ width: "90%" }}
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onDateChange} />
            }
            <Tourch title={'⏱️  ' + convertTimeToString(date)} onPress={showTimepicker} />
            {isShowTimepicker &&
                <DateTimePicker
                    style={{ width: "90%" }}
                    value={date}
                    mode="time"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onTimeChange} />
            }
        </View>
    );
};