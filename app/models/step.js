var Step = function () {

		this.belongsTo('ToDo');

		this.defineProperties({
				title: {type: 'string', required: true},
				description: {type: 'text'},
				status: {type: 'string'}
		});

		this.validatesPresent('title');
		this.validatesLength('title', {min: 5});

		this.validatesWithFunction('status', function(status) {
				return status == 'open' || status == 'done';
		}, {message: "Status must be 'open' or 'done.'"});
};

Step = geddy.model.register('Step', Step);
