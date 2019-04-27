(function () {

 	var app = angular.module("main",['wcLogin']);

	app.component("app", {
		template: '<div class="container">'+
					 '<div class="row"> '+
						'<div class="col-12 col-md-4 offset-sm-4"> '+
							'<login cookie-config="config" on-signin="signin(username,password)" '+
							   'on-signup="signup(name,email,password,agreed)"></login>'+
						'</div>'+
					  '</div>'+
					'</div>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {
		var date = new Date();
		date = date.setMinutes(date.getMinutes()+2);
		$scope.config = {
			domain: 'localhost',
			expires: new Date(date)
		};

		$scope.signin = function(username, password) {
			console.log(arguments);
		};

		$scope.signup = function(name,email,password,agreed) {
			console.log(arguments);
		};


	}

})();
