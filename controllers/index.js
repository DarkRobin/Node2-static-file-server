var fs = require('fs');

var indexController = {
	index: function(req, res) {
		var data = fs.readFileSync('data.txt');
		res.render('index');
	}
};

module.exports = indexController;