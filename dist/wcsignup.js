angular.module('wcLoginTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('login.html',
    "<label class=\"switch\">\r" +
    "\n" +
    "	<input type=\"checkbox\">\r" +
    "\n" +
    "	<span class=\"slider round\" ng-click=\"$ctrl.toggleAction()\"><b class=\"toggleText\">{{$ctrl.login ? 'SignIn' : 'SignUp'}}</b></span>\r" +
    "\n" +
    "</label>\r" +
    "\n" +
    "<signin cookie-config=\"config\" on-submit=\"$ctrl.signin(username,password)\" ng-if=\"$ctrl.login\"></signin>\r" +
    "\n" +
    "<signup on-submit=\"$ctrl.signup(name,email,password,agreed)\" ng-if=\"!$ctrl.login\"></signup>"
  );

}]);

(function () {

 	var app = angular.module("wcLogin",["ngAnimate","wcSignin","wcSignup"]);

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
