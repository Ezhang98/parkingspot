import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Notes from './Notes';

const AppNavigator = createStackNavigator({
	Home: { screen: Home },
	Notes: { screen: Notes },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
