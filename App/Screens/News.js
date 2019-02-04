import React, { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

class News extends Component {

	constructor(props) {
		super(props);
	}

	_keyExtractor = (item, index) => item;

	_renderItem = (item, key) => {
		console.log('item',item)
		return(
				<Text title={item.author}><Image source={item.urlToImage} />{item.title}</Text>
			);
	}

	render() {
		const {news , title} = this.props;

		return (
			<View style={{flex: 1}}>
				<FlatList 
					data={news}
					keyExtractor={this._keyExtractor}
					renderItem={({key, item}) => this._renderItem(item, key) }
				/>
			</View>
			);
	}
}

News.proptypes = {
	news: PropTypes.array.isrequired
};

export default News;