'use strict'
var Backbone = require('backbone');
var toDoModel = require('../models/toDoModel.js');


module.exports = Backbone.Collection.extend({
	model: toDoModel,
	url:  'http://tiyfe.herokuapp.com/collections/gm-backbone'

});