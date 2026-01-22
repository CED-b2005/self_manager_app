import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, Platform } from 'react-native';
import { convertDateToString } from '../../utils';
import { Tourch } from '../tourch.component';
import DropDownPicker from 'react-native-dropdown-picker';


export const TaskManagerHeader = () => {

    const [date, setDate] = useState(new Date());
    const [isShowDatepicker, setIsShowDatepicker] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'create', value: 'create' },
        { label: 'sync', value: 'sync' },
        { label: 'upload', value: 'upload' },
    ]);

    const onDateChange = (event: any, selectedDate: any) => {
        setIsShowDatepicker(false);
        if (selectedDate) setDate(selectedDate);
    };

    const showDatepicker = () => {
        setIsShowDatepicker(true);
    };

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            padding: 10,
            backgroundColor: 'white'
        }}>
            <Tourch
                title={'📅  ' + convertDateToString(date)}
                onPress={showDatepicker}
                tourchStyles={{
                    flex: 1,
                    height: 45,
                    fontSize: 12
                }}
            />
            {isShowDatepicker &&
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onDateChange} />
            }

            <View>
                <DropDownPicker
                    style={{ width: 100 }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>

            <Tourch
                title={"Active"}
                onPress={() => { }}
                tourchStyles={{
                    backgroundColor: 'green',
                    flex: 1,
                    height: 45,
                    fontSize: 12
                }}
            />
        </View>
    );
};

// const sty