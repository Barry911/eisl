(function () {
    "use strict";
    
       var hotelModule = angular.module('eventCenterModule');
        hotelModule.component('eventCenter', {
            templateUrl: 'ngf/event_center/event_center.template.html',
            controller: ['$scope','$state', function($scope, $state) {
                $scope.find_hotel = function(){
                	$state.go('event_center_query');
                };

            }]
        });
        
        hotelModule.component('eventCenterResult',{
        	templateUrl:'ngf/event_center/event_center_result.template.html',
        	controller: ['$scope','orderByFilter', function($scope, orderBy){
        		             
        		                $scope.price_trending_up = true; 
        		                $scope.rating_trending_up = true; 
        		                
        		                 
        		                var board = [
                    {
                        name : 'KLM Hotel and Suits',
                        type : 'Hotel (7 stars)',
                        rating : 1,
                        visits : 22,
                        price : 20000,
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : 'best Valentine discount',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : true,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : true,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    },
                    {
                        name : 'Majestic Event Center',
                        type : 'Event Center',
                        rating : 2,
                        visits : 34,
                        price : 30400,
                        location : {
                            add : 'Location is majestic event center',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : '',
                        discription : 'Majectic simply for you',
                        img : 'sample1.jpg',
                        siteUrl : 'majestic.kr.com',
                        facility : {
                            wifi : false,
                            airport_shuttle : false,
                            pool : false,
                            air_conditioned : true,
                            room_service : false,
                            breakfast : false,
                            restaurant : false,
                            local_bar : true,
                            security : true,
                            Speakers : true,
                        }
                    },
                    {
                        name : 'Happy Hotel and Suits',
                        type : 'Hotel (General)',
                        rating : 3,
                        visits : 22,
                        price : 25000,
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : 'best Valentine discount',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : false,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : false,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    },
                    {
                        name : 'J and jays Event Planner',
                        type : 'Event Planner',
                        rating : 4,
                        visits : 18,
                        price : 19000,
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : 'best Valentine discount',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : true,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : true,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    },
                    {
                        name : 'Roses Decorator',
                        type : 'Vendor',
                        rating : 5,
                        visits : 10,
                        price : 1000,
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : '',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : true,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : true,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    }
                ];
                
                 $scope.priceMin = 5;
                 $scope.propertyName = 'price';
 								 $scope.reverse = true;
  							 $scope.board = orderBy(board, $scope.propertyName, $scope.reverse);
  							 
  							 $scope.sortRating = function(propName){
        		                	$scope.rating_trending_up = !$scope.rating_trending_up;
        		                	$scope.propertyName = propName;
        		                	if($scope.rating_trending_up){
        		                			 $scope.reverse = true;
  							 					$scope.board = orderBy(board, $scope.propertyName, $scope.reverse);
        		                	}
        		                	else{
        		                		 $scope.reverse = false;
  								 		$scope.board = orderBy(board, $scope.propertyName, $scope.reverse);
        		                	}
        		     
        		                	
        		        }; 
        		     $scope.sortPrice = function(propName){
        		                	$scope.price_trending_up = !$scope.price_trending_up;
        		                	$scope.propertyName = propName;
        		                	if($scope.price_trending_up){
        		                			 $scope.reverse = true;
  							 					$scope.board = orderBy(board, $scope.propertyName, $scope.reverse);
        		                	}
        		                	else{
        		                		 $scope.reverse = false;
  								 		$scope.board = orderBy(board, $scope.propertyName, $scope.reverse);
        		                	}
        		                	
        		                	 }; 

                

                $scope.show_on_map =function (geo) {
                    console.log(geo);
                }
        	}]
        });
}());