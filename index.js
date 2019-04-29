(function () {

 	var app = angular.module("wcLogin",["wcLoginTemplates","ngAnimate","wcSignin","wcSignup"]);

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

		vm.toggleAction = function() {
			vm.login = !vm.login;
		};

		vm.$onInit = function() {
			vm.login = true;
		};
	}

	app.animation('.loginButton', toggleActionAnimation);

	function toggleActionAnimation() {
		return {
			addClass: signin,
			removeClass: signup
		};

		function signin(element, classname, done) {
			element.css({
				
			}).animate({

			},done);

			return function signinEnd(cancel) {
				if(cancel) {
					element.stop();
				}
			}
		}

		function signup(element, classname, done) {
			element.css({

			}).animate({

			},done);

			return function signupEnd(cancel) {
				if(cancel) {
					element.stop();
				}
			}
		}
	}

})();
