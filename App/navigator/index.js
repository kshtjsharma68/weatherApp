import { createStackNavigator, createAppContainer  } from 'react-navigation';
import App from '../index';
/**
* Screen's or components used for navigator
*/
import Index from '../appIndex';
import Weather from '../weatherIndex';
import News from '../newsIndex';

//Stack navigator
const mainNav = createStackNavigator({
	Home:{screen: Index},
	Weather:{screen: Weather},
	News: {screen: News}
},{
	initialRouteName: "Home"
});

// createAppContainer:  used to create Wrapper for stacknavigator when using with navigation on app component.
const nav = createAppContainer(mainNav);

export default nav;     