import React, {
    useContext
} from 'react';

import {
    NavigationContainer
} from '@react-navigation/native';

import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import FoodMenuScreen from '../screens/FoodMenuScreen';
import DrinksMenuScreen from '../screens/DrinksMenuScreen';
import OrdersScreen from '../screens/OrdersScreen';
import LoginScreen from '../screens/LoginScreen';
import { OrderItemsContext } from '../context/OrderContext';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        fontSize: 17,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: 13,
                        // backgroundColor: '#FAF9F6',
                        paddingHorizontal: 0,
                    },
                    tabBarStyle: {
                        backgroundColor: '#FAF9F6',
                        borderTopWidth: 0,
                        marginHorizontal: 0,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    },
                    tabBarIconStyle: {
                        display: 'none'
                    }
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Welcome'
            >
                <Tab.Screen name = 'Login' component={LoginScreen}/>
                <Tab.Screen name='Home' component={WelcomeScreen}/>
                <Tab.Screen name='Menu' component={FoodMenuScreen} />
                <Tab.Screen name='Drinks' component={DrinksMenuScreen} />
                <Tab.Screen name="Order" component={OrdersScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;