import { View, Text } from 'react-native';
import { TaskCard } from './task-card.tsx';

export const TaskManagerBody = () => {
    return (
        <View>
            <Text>--- Task Manager Body ---</Text>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <Text>--- Task Manager Body ---</Text>
        </View>
    )
}