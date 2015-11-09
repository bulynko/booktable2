angular.module("table").controller("LoginCtrl", ['$scope', '$meteor', '$rootScope', '$state',
  function($scope, $meteor, $rootScope, $state){
 

console.log(" Login-Controller..... ");

   // $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

 $scope.userLoginButton = function(myuser) {
  
  $scope.myuser_email2=myuser.email;
  $scope.myuser_password2=myuser.password;

  var u = myuser_email2=myuser.email;
  var p = myuser.password;
    
  console.log(" trying to login ... "+u+" / "+p);   
  Meteor.logout();  
  Meteor.loginWithPassword(u, p);  
  $state.go("locations");   

  $scope.loginErrorMessage="Login Error... try again ! " ;
  };


 $scope.userLogout = function() {
  Meteor.logout();  
  $state.go("loginStart");    
  };


 $scope.registerUserButton = function(myuser) {
 // $scope.myuser_email2=myuser.email;
 // $scope.myuser_password2=myuser.password;

  var u = myuser_email2=myuser.email;
  var p = myuser.password;
  var p2 = myuser.password2;
  var c = myuser.code;  
    
  if ((c === "GBM" ) && ( p === p2 )  && ( p.length > 5) )
  {
     console.log(" code accepted ! "+c);
      Accounts.createUser({email: u, password: p} );  
    $state.go("loginStart");             
  }  
  else {
  
   if (c != "GBM" )  { $scope.myuser.code="";} 		
   
    if ( p != p2 )
    {
  	  $scope.myuser.password="";
     $scope.myuser.password2="";
    }
   
   console.log(" code/pswd ERROR "+c);
   $scope.registerErrorMessage="Error Code/Password ..... try again ! " ;          	
  }
 
 // console.log(" trying to register  ..... "+u);   
  Meteor.logout();  
 // Meteor.loginWithPassword(u, p);  
 // $state.go("loginStart");   

  
  };



}

]);
