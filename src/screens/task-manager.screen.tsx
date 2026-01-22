import { View, Text } from 'react-native';
import { TaskManagerHeader, TaskManagerBody, HidenHeader } from '../components';
import DateTimePicker from '@react-native-community/datetimepicker';

export const TaskManagerScreen = () => {

    return (
        <View>
            <HidenHeader />
            <TaskManagerHeader />
            {/* <TaskManagerBody /> */}
            {/* <Text>--- Task Manager Screen ---</Text> */}
            {/* <DateTimePicker value={new Date()} mode='date'/> */}
        </View>
    )
}