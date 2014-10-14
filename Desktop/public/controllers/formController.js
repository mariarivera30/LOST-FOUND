angular.module('formApp')

.controller('formController',['$scope','$http','restApi', function($scope,$http,restApi) {
 $scope.items
$scope.users
  getUser();  
	function getUser() {
        restApi.getUsers()
            .success(function (data) {
              
                $scope.users = data.users;
              })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
	// we will store all of our form data in this object
	$scope.items= [{'name': 'Maria Rivera',
	     'itemId': '#80',
	 	  'views': '12',
	 	  'status':'FOUND',
	 	  'location':'Fisica',
	 		'IMG':'http://www.vivetumoto.com/foros/attachments/chaquetas-motociclistas/2873d1356133608t-vendo-hermosa-chaqueta-icon-overlord-typer-1-dsc_0473-1-.jpg'},

	 	  {	'name': 'Juan Rivera',
          	'itemId': '#70',
 	  		'views': '13',
 	  		'status':'LOST',
 	 		'location':'STEFANI',
 	 			 		'IMG':'https://img0.etsystatic.com/023/0/6677928/il_340x270.577570516_6vcv.jpg'},


 	  	  {'name': 'Irving Rivera',
	     	'itemId': '#80',
	 	 	'views': '12',
	 	  	'status':'FOUND',
	 	    'location':'Fisica',
	 		 		'IMG':'http://i00.i.aliimg.com/photo/v0/353397906/10_inch_TABLET_PC_Talet_computer_10.jpg'
},
	 	  {'name': 'Xavier De La Torre',
     		'itemId': '#890',
 	  		'views': '130',
 	  		'status':'FOUND',
 	  		'location':'Cafeteria',
 	  		 		'IMG':'http://static.photo.net/v3graphics/20140428/equipment/medium/2964.jpg'
}];


	
	// function to process the form
	$scope.processForm = function() {
		alert('awesome!');
	};
	
}]);
