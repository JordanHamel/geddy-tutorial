var ToDo = function () {

		this.hasMany('Steps');

		this.defineProperties({
				title: {type: 'string', required: true},
				status: {type: 'string'}
		});

		this.validatesPresent('title');
		this.validatesLength('title', {min: 5});

		this.validatesWithFunction('status', function (status) {
				return status == 'open' || status == 'done';
		}, {message: "Status must be 'open' or 'done.'"});

};

ToDo = geddy.model.register('ToDo', ToDo);
