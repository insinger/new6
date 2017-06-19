console.log("in index.js!");
(function () {
	var MyApp=angular.module("MyApp",[]);
	myCtrl=this

	MyCtrl=function () {
		var myCtrl=this;
		var upperCaseMode=false;
		myCtrl.name="";
		myCtrl.clearForm=function () {
			console.log("in clearForm()!");
			myCtrl.name="";
			}
		myCtrl.toggleCase=function () {
			console.log("in toggleCase()!");
			if (!upperCaseMode) {
				myCtrl.name=myCtrl.name.toUpperCase();
				upperCaseMode=true;
				}
			else {
				myCtrl.name=myCtrl.name.toLowerCase();
				upperCaseMode=false;
				}
			}
		myCtrl.submitForm=function () {
			console.log("in submitForm()!");
			}
		}
	MyApp.controller("MyCtrl",MyCtrl);
	}
)();
