import { createStackNavigator, createAppContainer  } from 'react-navigation';
import App from '../index';
import Index from '../appIndex';
import Weather from '../weatherIndex';
import News from '../newsIndex';


const mainNav = createStackNavigator({
	Home:{screen: Index},
	Weather:{screen: Weather},
	News: {screen: News}
},{
	initialRouteName: "Home"
});

const nav = createAppContainer(mainNav);

export default nav;     