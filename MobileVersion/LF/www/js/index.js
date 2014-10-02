angular.module('LostFound', ['ionic', 'ngCordova'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            

            .state('main', {
                url : '/main',
                templateUrl : 'mainContainer.html',
                abstract : true,
                controller : 'MainController'
            })

        
            .state('main.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'home.html',
                        controller : 'homePageController'
                    }
                }
            })

            .state('main.item', {
                 url: '/item',
                 views: {
                     'main': {
                         templateUrl: 'item.html',
                         controller : 'itemPageController'
                     }
                 }
            })
            .state('main.myitems1', {
                 url: '/myitems1',
                 views: {
                     'main': {
                         templateUrl: 'myitems1.html',
                         controller : 'myitems1PageController'
                     }
                 }
            })
            .state('main.myitems2', {
                 url: '/myitems2',
                 views: {
                     'main': {
                         templateUrl: 'myitems2.html',
                         controller : 'myitems2PageController'
                     }
                 }
            })
             .state('main.reportitem1', {
                 url: '/reportitem1',
                 views: {
                     'main': {
                         templateUrl: 'reportitem1.html',
                         controller : 'reportitem1PageController'
                     }
                 }
            })
            .state('main.reportitem2', {
                 url: '/reportitem2',
                 views: {
                     'main': {
                         templateUrl: 'reportitem2.html',
                         controller : 'reportitem2PageController'
                     }
                 }
            })
            .state('main.comments', {
                 url: '/comments',
                 views: {
                     'main': {
                         templateUrl: 'comments.html',
                         controller : 'commentsPageController'
                     }
                 }
            })
            .state('main.info', {
                url: '/info',
                views: {
                    'main': {
                        templateUrl: 'info.html',
                        controller : 'InfoPageController'
                    }
                }
            })

             .state('main.feedback', {
                 url: '/feedback',
                 views: {
                     'main': {
                         templateUrl: 'feedback.html',
                         controller : 'feedbackPageController'
                     }
                 }
            })
             .state('main.help', {
                 url: '/help',
                 views: {
                     'main': {
                         templateUrl: 'help.html',
                         controller : 'helpPageController'
                     }
                 }
            })

        $urlRouterProvider.otherwise('/main/home');
    }])

    
    .controller('MainController', [ '$scope',  function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
        $scope.categories = [{'name': 'Date'},
                         {'name': 'Electronic'},
                         {'name': 'Books'},
                         {'name': 'Bags'},
                         {'name': 'Personal'},
                         {'name': 'Clothes'},
                         {'name': 'Other'}];

        $scope.itemspre = [
        {'itemname': 'Chaqueta',
         'name': 'Maria Rivera',
         'itemId': '#80',
          'views': '12',
          'status':'FOUND',
          'location':'Fisica',
          'imageurl': 'http://www.vivetumoto.com/foros/attachments/chaquetas-motociclistas/2873d1356133608t-vendo-hermosa-chaqueta-icon-overlord-typer-1-dsc_0473-1-.jpg' 
        },

          { 'itemname': 'Reloj',
            'name': 'Juan Rivera',
            'itemId': '#70',
            'views': '13',
            'status':'LOST',
            'location':'STEFANI',
            'imageurl': 'https://img0.etsystatic.com/023/0/6677928/il_340x270.577570516_6vcv.jpg'
        },

          { 'itemname': 'Tablet',
            'name': 'Irving Rivera',
            'itemId': '#80',
            'views': '12',
            'status':'FOUND',
            'location':'Fisica',
            'imageurl': 'http://i00.i.aliimg.com/photo/v0/353397906/10_inch_TABLET_PC_Talet_computer_10.jpg'
        },
          { 'itemname': 'Chaqueta',
            'name': 'Xavier De La Torre',
            'itemId': '#890',
            'views': '130',
            'status':'FOUND',
            'location':'Cafeteria',
            'imageurl': 'http://static.photo.net/v3graphics/20140428/equipment/medium/2964.jpg'
        },
            {'itemname': 'Chaqueta',
            'name': 'Juan Rivera',
            'itemId': '#70',
            'views': '13',
            'status':'LOST',
            'location':'STEFANI',
            'imageurl': 'http://static.photo.net/v3graphics/20140428/equipment/medium/2964.jpg'
            }

            ];
            $scope.comments = [
            {'name': 'Maria Rivera',
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
    }])


    
    .controller('homePageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Lost/Found';
        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
         $scope.rightButtons = [{
            type: 'button-icon icon ion-paper-airplane',
            tap: function(e) {
                $state.go('main.reportitem1');
            }
        }];
        

        
    }])


    .controller('itemPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Item';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
         $scope.rightButtons = [{
            type: 'button-icon icon ion-arrow-left-c',
            tap: function(e) {
                 window.history.back();
            }
        }];
    }])

    .controller('reportitem1PageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Report Item';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('reportitem2PageController', [ '$scope', '$state', '$cordovaCamera', function($scope, $state, $cordovaCamera) {
        $scope.navTitle = 'Report Item';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
               
            }
        }];
        $scope.rightButtons = [{
            type: 'button-icon icon ion-ios7-upload-outline',
            tap: function(e) {
                $state.go('entry');
            }
        }];
        
    }])
  
    .controller('InfoPageController', [ '$scope', '$state', function($scope, $state) {
            $scope.navTitle = 'About Us';

            $scope.leftButtons = [{
                type: 'button-icon icon ion-navicon',
                tap: function(e) {
                    $scope.toggleMenu();
                }
            }];
        }])

    .controller('feedbackPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Leave a FeedBack';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('myitems1PageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'myItem';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('myitems2PageController', [ '$scope', '$state', '$cordovaCamera' , function($scope, $state, $cordovaCamera) {
        $scope.navTitle = 'myItems';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
        $scope.takePicture = function() {
        var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occured. Show a message to the user
      $window.alert('Should not see this stuff');
    });
  }











    }])
    .controller('commentsPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Comments';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('helpPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Help';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
        $scope.tutorials = [
            {
             'pict':'tutorialitem.jpg'
            },
            {
             'pict':'tutorialnav.jpg'
            },
            {
             'pict':'tutorialreportside.jpg'
            },
            {
             'pict':'tutorialspecificitem.jpg'
            },
        ];
    }])
    
    .service('translationService', function($resource){  

        this.getTranslation = function($scope, language) {
            var languageFilePath = 'translation_' + language + '.json';
            console.log(languageFilePath);
           return $resource(languageFilePath)
             //  alert($scope.translation.HELLO_WORLD);


        };
    })
    .controller('myController',['$scope', 'translationService', 
    function ($scope, translationService){  

    // this is my controller forward declaration.
    // this implicitly applies the scope to the controller
    var vm = this;
    vm.translations = {};
    vm.language = "en";
    vm.translate = translatePage;
    vm.onchangeLanguage = onchangeLanguage;

    // Invoke initialization.
    activate();

    // Initialization method for the controller.
    function activate()
    {
        vm.translate(vm.language);
    }

    // load the resource from json service
    function translatePage(language)
    {
        translationService.getTranslation($scope,language).get(function (data)
        {
            vm.translations = data;
        });
    }

    // event handler for language change
    function onchangeLanguage()
    {
        vm.translate(vm.language);
    }
  
}])
   




