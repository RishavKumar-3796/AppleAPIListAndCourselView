import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../modules/Screens/LoginScreen/LoginScreen';
import HomeScreen from '../modules/Screens/HomeScreen/HomeScreen';


const AuthStack = createStackNavigator(
  {
    LoginScreen
  },
  {
    // Default config for all screens
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    HomeScreen
  },
  {
    // Default config for all screens
    headerMode: 'none',
  },
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    AuthStack,
    HomeStack
  },
  {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {},
  },
);

export default createAppContainer(PrimaryNav);
