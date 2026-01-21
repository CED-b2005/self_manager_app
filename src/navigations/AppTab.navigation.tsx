import React from "react";
import { View, Text } from "react-native";
import { AppTabPraramList } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator<AppTabPraramList>();

export const AppNaviagtor = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#007bff',
                    tabBarInactiveTintColor: 'gray',
                }}>
                <Tab.Screen
                    name="TaskManager"
                    component={() => (<View><Text>Task Manager Screen</Text></View>)} />

                <Tab.Screen
                    name="MoneyManager"
                    component={() => (<View><Text>Money Manager Screen</Text></View>)} />

                <Tab.Screen
                    name="Chat"
                    component={() => (<View><Text>Chat Screen</Text></View>)} />

                <Tab.Screen
                    name="Story"
                    component={() => (<View><Text>Story Screen</Text></View>)} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}

