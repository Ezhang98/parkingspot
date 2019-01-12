import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Notes from './Notes';
import Saved from './Saved';

const AppNavigator = createStackNavigator({
	Home: { screen: Home },
	Notes: { screen: Notes },
    Saved: { screen: Saved },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
