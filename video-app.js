var videoapp = angular.module("videoApp",[]);


    videoapp.controller("VideoController", ["$scope","$window", function($scope, $window){
        $scope.videoDisplay = document.getElementById("VideoElement");
        $scope.videoSource = $window.VideoSource;
        $scope.titleDisplay = $window.titleDisplay;
        $scope.videoDescription = $window.videoDescription;
        
        
    }]);