import angular from 'angular';
import 'angular-async-router';
import asyncLoader from 'angular-async-loader';

export default function (require, exports, module) {

    var app = angular.module('app', ['ui.router']);

    asyncLoader.configure(app);

    module.exports = app;
}
