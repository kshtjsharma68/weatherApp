import React, {Component} from 'react';
import { StyleSheet, View, Text, ProgressBarAndroid, Button } from 'react-native';
import News from './Screens/News';
import {links, colors} from './config/newsLinks';



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
			error: ''
		};
	}

	componentWillMount() {
		// this.fetchNews();
	}

	fetchNews( url ){
		fetch(
				`${url}`
			)
		.then(res => res.json())
		.then(res => {
			if ( res.status == "error" ) {
					this.setState({
						isLoading: true,
						error: res.message
					});
			} else {
					this.setState({
						isLoading: false,
						news: res.articles
					});	
			}			
		})
		.catch(err => {
			this.setState({
				error: String(err)
			})
		});
	}

	render() {
		const { isLoading, news, title, error } = this.state;

		return (
				<View style={styles.container}>
					<View style={styles.buttonsContainer}>
						{ Object.keys(links).map((v, k) => {
							return <Button title={v} key={k} onPress={() => this.fetchNews(links[v])} color={colors[k]}/>
							})
						}
					</View>
					{isLoading ? 
						<View style={styles.news}>
							<ProgressBarAndroid />
							<Text style={styles.centerText}>Click on button to get news..</Text>
							<Text>{error}</Text>
						</View>	
						
						 : 
						<News news={news} title={title}/>
					 }
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
	},
	buttonsContainer: {
		marginTop: 5,
		padding: 5,
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	news: {
		flex: 1,
	},
	centerText: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 15
	}
});

export default NewsIndex;