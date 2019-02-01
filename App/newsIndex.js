import React, {Component} from 'react';
import { StyleSheet, View, Text, ProgressBarAndroid } from 'react-native';
import News from './Screens/News';
import * as API_KEY from './config/weather';

class NewsIndex extends Component {

	static navigationOption = {
		title: 'News'
	};

	constructor(props) {
		super(props);
		this.state ={
			isLoading: true,
			news: 0,
			title: 'Nothing in news',
			error: null
		};
	}

	componentWillMount() {
		this.fetchNews();
	}	

	fetchNews( lat =25, lon= 25 ){
		fetch(
				`https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-01&sortBy=publishedAt&apiKey=${API_KEY.NEWS_API_KEY}`
			)
		.then(res => res.json())
		.then(res => {
			this.setState({
				isLoading: false,
				news: res.articles
			});
		})
		.catch(err => {
			this.setState({
				error: err
			})
		});
	}

	render() {
		const { isLoading, news, title, error } = this.state;

		return (
				<View style={styles.container}>
				{isLoading ? (
					<View>
						<ProgressBarAndroid />
						<Text>{ error }</Text>
					</View>	
					// <Text>Fetching the weather</Text>
					) : (
					<News news={news} title={title}/>
					) }
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center'
	}
});

export default NewsIndex;