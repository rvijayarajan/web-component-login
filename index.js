(function () {

 	var app = angular.module("wcLogin",["wcSignin","wcSignup"]);

	app.component("login", {
		templateUrl: "login.html",
		bindings: {
			cookieConfig: '<',
			onSignin: '&',
			onSignup: '&'
		},
		controller: "LoginController"
	});

	app.controller("LoginController", LoginControllerFn);

	LoginControllerFn.$inject = ["$scope"];

	function LoginControllerFn($scope) {

		var vm = $scope.$ctrl;

		vm.signup = function(name,email,password,agreed) {
			vm.onSignup({
				name: name,
				email: email,
				password: password,
				agreed: agreed
			});
		};

		vm.signin = function(username, password) {
			vm.onSignin({
				username: username,
				password: password
			});
		};
	}

})();
