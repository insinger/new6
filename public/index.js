console.log("in index.js!");
(function () {
	var MyApp=angular.module("MyApp",[]);
	myCtrl=this

	MyCtrl=function () {
		var myCtrl=this;
		var upperCaseMode=false;
		myCtrl.name="";
		myCtrl.email="";
		myCtrl.phone="";
		myCtrl.comment="";
		myCtrl.rating="";
		myCtrl.clearForm=function () {
			console.log("in clearForm()!");
			myCtrl.name="";
			myCtrl.email="";
			myCtrl.phone="";
			myCtrl.comment="";
			myCtrl.rating="";
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
			for (var k in myCtrl) {
				if (myCtrl.hasOwnProperty(k) && typeof(myCtrl[k])!="function") console.log(k,myCtrl[k]);
				}
			}
		}
	MyApp.controller("MyCtrl",MyCtrl);
	}
)();
