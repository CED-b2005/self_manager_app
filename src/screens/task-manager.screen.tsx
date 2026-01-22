import { View, Text } from 'react-native';
import { TaskManagerHeader, TaskManagerBody, } from '../components';
import DateTimePicker from '@react-native-community/datetimepicker';

export const TaskManagerScreen = () => {
    return (
        <View>
            {/* <Text>--- Task Manager Screen ---</Text> */}
            <TaskManagerHeader />
            {/* <TaskManagerBody /> */}
            {/* <Text>--- Task Manager Screen ---</Text> */}
            {/* <DateTimePicker value={new Date()} mode='date'/> */}
        </View>
    )
}