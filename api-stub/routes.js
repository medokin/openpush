module.exports = function(server) {

  // Create an API namespace, so that the root does not 
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		server.get('/projects', function(req, res) {
			var projects = [
                {
                    'id': 1,
                    'title': 'First Project',
                    'created': new Date()
                },
                {
                    'id': 2,
                    'title': 'Second Project',
                    'created': new Date()
                }
            ];


			res.send({projects: projects});
		});

	});

};