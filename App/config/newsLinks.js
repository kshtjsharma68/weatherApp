import { NEWS_API_KEY } from './weather'; 

let today = new Date();

const links = {
	bitcoins: `https://newsapi.org/v2/everything?q=bitcoin&from=${today.getFullYear()}-${today.getMonth()}-${today.getDate()}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
	business: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`,
	wallStreet: `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${NEWS_API_KEY}`
};

export default links;