import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	id(i) {
		return i + 1;
	},
	alias(i) {
		return faker.list.cycle('four-barrel-coffee-san-francisco', 'four-barrel-coffee-san-francisco-4', 'the-mill-san-francisco', 
			'sightglass-coffee-san-francisco-7', 'ritual-coffee-roasters-san-francisco', 'red-door-coffee-san-francisco','the-richfield-san-francisco',
			'four-barrel-coffee-stand-san-francisco','pentacle-coffee-san-francisco-2','mission-edge-cafe-daly-city')(i);
	},
	name(i) {
		return faker.list.cycle('Four Barrel Coffee','Four Barrel Coffee','The Mill','Sightglass Coffee','Ritual Coffee Roasters','Red Door Coffee',
			'The Richfield','Four Barrel Coffee Stand','Pentacle Coffee','Mission Edge Cafe')(i);
	},
	is_opened() {
		return true;
	},
	address(i) {
		return faker.list.cycle('375 Valencia St, San Francisco, CA 94103',
			'2 Burrows St, San Francisco, CA 94134',
			'736 Divisadero St, San Francisco, CA 94117',
			'270 Seventh St, San Francisco, CA 94103',
			'1026 Valencia St, San Francisco, CA 94110',
			'111 Minna St, San Francisco, CA 94105',
			'195 5th Ave, San Francisco, CA 94118',
			'1 Sausalito - San Francisco Ferry Bldg, San Francisco, CA 94111',
			'64 6th St, San Francisco, CA 94103',
			'5999 Mission St, Daly City, CA 94014')(i);
	},
	phone(i) {
		return faker.list.cycle('(415) 252-0800',
			'(415) 715-8296',
			'(415) 345-1953',
			'(415) 861-1313',
			'(415) 641-1011',
			'(415) 974-1719',
			'No Phone',
			'No Phone',
			'(415) 508-6258',
			'(415) 325-5980')(i);
	},
	url(i) {
		return faker.list.cycle('https://www.yelp.com/biz/four-barrel-coffee-san-francisco?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/four-barrel-coffee-san-francisco-4?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/the-mill-san-francisco?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/sightglass-coffee-san-francisco-7?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/ritual-coffee-roasters-san-francisco?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/red-door-coffee-san-francisco?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/the-richfield-san-francisco?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/four-barrel-coffee-stand-san-francisco?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/pentacle-coffee-san-francisco-2?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA',
			'https://www.yelp.com/biz/mission-edge-cafe-daly-city?adjust_creative=PKmJIkqq1lSspeYJj0SOMA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=PKmJIkqq1lSspeYJj0SOMA')(i);
	},
	photo_url(i) {
		return faker.list.cycle('https://s3-media3.fl.yelpcdn.com/bphoto/E17wpmhnO4bwfT_MVgaIJw/o.jpg',
			'https://s3-media3.fl.yelpcdn.com/bphoto/28yVNPMNt8acfY3qmAeLfA/o.jpg',
			'https://s3-media3.fl.yelpcdn.com/bphoto/W2auMNWbIzQzOuJD6t1SUw/o.jpg',
			'https://s3-media1.fl.yelpcdn.com/bphoto/l6XXxqWGqyr6RlyDdqz65A/o.jpg',
			'https://s3-media2.fl.yelpcdn.com/bphoto/DT1eEqI-ttdyTYcmBMOfDQ/o.jpg',
			'https://s3-media1.fl.yelpcdn.com/bphoto/otZzgHQog3KNfy3jefUt7A/o.jpg',
			'https://s3-media2.fl.yelpcdn.com/bphoto/V2wVlKHym6i9CBOjI1PjJQ/o.jpg',
			'https://s3-media3.fl.yelpcdn.com/bphoto/pHqpCxnCBKPaAFyKCCZPQQ/o.jpg',
			'https://s3-media3.fl.yelpcdn.com/bphoto/T6L2MGljzTwf5jFnquTMUA/o.jpg',
			'https://s3-media1.fl.yelpcdn.com/bphoto/LK-54buODz6l_kKzH26S4g/o.jpg')(i);
	},
	longitude(i) {
		return faker.list.cycle(-122.42184275,-122.4036865,-122.437750024358,-122.4086371,-122.42137,-122.399547,-122.463768005371,-122.393751069903,-122.40936,-122.45467)(i);
	},
	latitude(i) {
		return faker.list.cycle(37.7670169511878, 37.7289353,37.7764801534107, 37.7768998,37.75642,37.787385, 37.7849655151367,37.7951001816931,37.78117, 37.7078599)(i);
	},
	saved() {
		return false;
	}
});
