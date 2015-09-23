'use strict';
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

var toDoModel = require('./models/toDoModel.js');
var toDoView= require('./views/toDoView.js');
var toDoCollection= require('./collections/toDoCollection.js');

$(document).ready(function() {

	var $appForm = $('#appForm');
	var $appInput = $('#appInput');
	var appTemplate = _.template($('#list-row').html());
	var $appList = $('#appList');

	var newItems = new toDoCollection();

	$appForm.on('submit', function(e){
		e.preventDefault();
		newItems.add({
			item: $appInput.val()
		})	
	});
	newItems.on('add', function(newListItem){
		newListItem.save();
		var newHtml = appTemplate(newListItem.toJSON());
		$appList.append(newHtml);
	});

	$app.on('submit', onFormSubmit);

	newItems.on('add', newListItem);
	newItems.fetch();

});