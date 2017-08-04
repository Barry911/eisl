(function () {
    "use strict";
    
       var hotelModule = angular.module('hotelModule');
        hotelModule.component('hotel', {
            templateUrl: 'public/hotel/hotel.template.html',
            controller: ['$scope','$state', function($scope, $state) {
                $scope.find_hotel = function(){
                	$state.go('hotel_query');
                };

            }]
        });

        
        hotelModule.component('hotelResult',{
        	templateUrl:'public/hotel/hotel_result.template.html',
        	controller: ['$scope','orderByFilter', function($scope, orderBy){

        	}]
        });
}());