'use strict';

app.factory('HubFactory', ['$rootScope', 'ServerURL', function ($rootScope, ServerURL) {

    function backendFactory(serverUrl, hubName) {
        var connection = $.hubConnection(serverUrl);
        connection.logging = true;
        var proxy = connection.createHubProxy(hubName);

        connection.start({transport: 'serverSentEvents'}).done(function () { });

        return {
            on: function (eventName, callback) {
                proxy.on(eventName, function (result) {
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback(result);
                        }
                    });
                });
            }
        };
    };

    return backendFactory;
  }]);