import DS from 'ember-data';

export default DS.Model.extend({
	alias: DS.attr('string'),
    name: DS.attr('string'),
    is_opened: DS.attr('boolean'),
    address: DS.attr('string'),
    phone: DS.attr('string'),
    url: DS.attr('string'),
    photo_url: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    saved: DS.attr('boolean')
});
