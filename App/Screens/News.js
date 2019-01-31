import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

const News = (news) => {
	return (
		<View style={{flex: 1}}>
			<FlatList 
				data={news}
				renderItems={({item}) => <Text>{item.news}</Text> }
			/>
		</View>
		);
}


news.proptypes = {
	news: PropTypes.string.isrequired
};

export default News;