var OldHttpFactory = function ($http) {
    	    var promise;
    	    var HttpFactory = {
        	        getAsync: function (url) {
            	            promise = $http.get(url).then(function (response) {
                	                return response.data;
                	            });
            	            return promise;
        	        }
	    };
	    return HttpFactory;
	};
	
OldHttpFactory.$inject = ['$http'];
app.factory('OldHttpFactory', OldHttpFactory);