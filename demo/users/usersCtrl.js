import app from '../app';

export default function (require) {

    // dynamic load services here or add into dependencies of ui-router state config
    // require('../services/usersService');

    app.controller('usersCtrl', ['$scope', function ($scope) {
        $scope.name = 'UserList';

        // shortcut to get angular injected service.
        var service = app.get('usersService');
        $scope.userList = service.list();
    }]);

});
