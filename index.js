(function () {

 	var app = angular.module("wcLogin",[]);

	app.component("login", {
		templateUrl: "login.html",
		controllerAs: "cntl",
		bindings: {

		},
		controller: "LoginController"
	});

	app.controller("LoginController", LoginControllerFn);

	LoginControllerFn.$inject = ["$scope"];

	function LoginControllerFn($scope) {
	}

})();
