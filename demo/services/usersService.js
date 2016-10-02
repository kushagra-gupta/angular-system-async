import angular from 'angular';
import app from '../app';

export default function(require) {

    // put into a new module for demo
    var module = angular.module('my.mod.1', []);

    module.service('usersService', function () {
        return {
            list: function () {
                return [
                    {
                        name: 'user-1',
                        mail: 'user-1@email.com'
                    }, {
                        name: 'user-2',
                        mail: 'user-2@email.com'
                    }
                ];
            }
        };
    });

    app.useModule('my.mod.1');
}
