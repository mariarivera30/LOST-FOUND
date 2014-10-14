angular.module('formApp')
.controller('itemViewController',['$scope','restApi', function($scope,restApi) {


 function getUser() {
        restApi.getUser()
            .success(function (custs) {
                $scope.users = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
	 // we will store all of our form data in this object
	$scope.comments = [{'name': 'Maria Rivera',
	     
	 	  'date':'03/08/15',
	 	   'comment':'Las vi en el departamento'
	 	},
	 	{'name': 'Juan del Pueblo',
	     
	 	  'date':'03/08/15',
	 	   'comment':'Las tiene Pedro'
	 	},
	 	{'name': 'Karla Rivera',
	     
	 	  'date':'03/08/15',
	 	   'comment':'Se te calleron en el zafacon.'
	 	},
	 	];

$scope.item = {'name': 'Maria Rivera',
'phone':'7879787978',
	     'itemId': '#80',
	 	  'views': '12',
	 	  'status':'FOUND',
	 	  'location':'Fisica',
	 	  'reportDate':'03/08/15',
	 	   'itemName':'Keys',
	 	   'description':'Tiene 6 llaves. ',
	 		'city':'San Juan',
	 		'thumbsDown':'60',
	 		'successDate':'undelivered',
	 		'picture':'PICTURE'
	 	};
	
	// function to process the form
	$scope.processForm = function() {
		alert('awesome!');
	};
	
}])
;