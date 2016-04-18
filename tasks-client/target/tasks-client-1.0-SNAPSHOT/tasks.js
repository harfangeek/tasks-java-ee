
var port = "8080/tomcat";

function Tasks($scope, $http) {
    
    $http.get('http://localhost:'+ port +'/tasks-server/service/getAllTasksJSON').
    success(function(data) {
        $scope.tasks = data;          
        
    });
    
    
    
    
    $scope.removeTask = function(taskId){
        $http.delete('http://localhost:'+ port +'/tasks-server/service/deleteTask/' + taskId)
        .success(function (data, status, headers) {
            $scope.ServerResponse = data;
            location.reload();
        })
        .error(function (data, status, header, config) {
            $scope.ServerResponse =  htmlDecode("Data: " + data +
                "\n\n\n\nstatus: " + status +
                "\n\n\n\nheaders: " + header +
                "\n\n\n\nconfig: " + config);
        });  
    };
    
    $scope.removeTask = function(taskId){
        $http.delete('http://localhost:'+ port +'/tasks-server/service/deleteTask/' + taskId)
        .success(function (data, status, headers) {
            $scope.ServerResponse = data;
            location.reload();
        })
        .error(function (data, status, header, config) {
            $scope.ServerResponse =  htmlDecode("Data: " + data +
                "\n\n\n\nstatus: " + status +
                "\n\n\n\nheaders: " + header +
                "\n\n\n\nconfig: " + config);
        });  
    };
    
    $scope.getTask = function (taskid) {
       $http.get('http://localhost:'+ port +'/tasks-server/service/getTaskByIdJSON/' + taskid).
       success(function(data) {
        $scope.task = data;          
        $scope.title = data.task.title;
        $scope.description = data.task.description;
        $scope.id = data.task.id;
    });
   };
   
   
   
   $scope.addTask = function () {
    var data = $.param({
        title: $scope.title,
        description: $scope.description
    });
    
    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }

    $http.put('http://localhost:'+ port +'/tasks-server/service/createTask', data, config)
    .success(function (data, status, headers) {
        $scope.ServerResponse = data;
        document.location = "tasks.html";

    })
    .error(function (data, status, header, config) {
        $scope.ServerResponse =  htmlDecode("Data: " + data +
            "\n\n\n\nstatus: " + status +
            "\n\n\n\nheaders: " + header +
            "\n\n\n\nconfig: " + config);
    });
};

$scope.editTask = function () {
    var data = $.param({
        id: $scope.id,
        title: $scope.title,
        description: $scope.description
    });
    
    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }

    $http.put('http://localhost:'+ port +'/tasks-server/service/updateTask', data, config)
    .success(function (data, status, headers) {
        $scope.ServerResponse = data;
        document.location = "tasks.html";
    })
    .error(function (data, status, header, config) {
        $scope.ServerResponse =  htmlDecode("Data: " + data +
            "\n\n\n\nstatus: " + status +
            "\n\n\n\nheaders: " + header +
            "\n\n\n\nconfig: " + config);
    });
};

$scope.getParameter = function(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
     );

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
};
}


