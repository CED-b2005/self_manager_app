import { View, Text } from 'react-native';
import { TaskManagerHeader, TaskManagerBody } from '../components/task-manager';

export const TaskManagerScreen = () => {
    return (
        <View>
            <Text>--- Task Manager Screen ---</Text>
            <TaskManagerHeader />
            <TaskManagerBody />
            <Text>--- Task Manager Screen ---</Text>
        </View>
    )

}