
function Tasks($scope, $http) {
    $http.get('http://localhost:8080/tomcat/tasks-server/service/getAllTasksJSON').
        success(function(data) {
            $scope.tasks = data;          
            
        });
}

var myApp = angular.module("myApp", []);
    myApp.controller("HttpPutController", function ($scope, $http) {

        $scope.UpdateData = function () {
            var data = $.param({
                firstName: $scope.title,
                lastName: $scope.description
            });

            $http.put('http://localhost:8080/tomcat/tasks-server/service/createTask?'+ data)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse =  htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
        };
    });