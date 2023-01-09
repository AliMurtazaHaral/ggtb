import {
    createStackNavigator
} from "react-navigation-stack";
import {
    createAppContainer
} from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import FoodMenuScreen from "../screens/FoodMenuScreen";
import DrinksMenuScreen from '../screens/DrinksMenuScreen';
import OrdersScreen from '../screens/OrdersScreen';

const HomeStack = createStackNavigator(
    {
        Welcome: { screen: WelcomeScreen },
        Food: { screen: FoodMenuScreen },
        Drinks: { screen: DrinksMenuScreen },
        Orders: { screen: OrdersScreen },
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none',
        defaultNavigationOptions: {
            cardStyle: {
                backgroundColor: 'transparent'
            },
        }
    }
);

export default createAppContainer(HomeStack);