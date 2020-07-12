import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InitialScreen from '../modules/Screens/InitialScreen';

const AuthStack = createStackNavigator(
  {
    InitialScreen
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
  },
  {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {},
  },
);

export default createAppContainer(PrimaryNav);
