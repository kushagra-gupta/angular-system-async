
System.config({
    paths: {},
    meta: {
        "angular": {
            "format": "global",
            "exports": "angular",
            "deps": [
            ]
        },
        "angular-ui-router": {
            "deps": [
            "angular"
            ]
        },
        'angular-ui-mask': {
            "deps": [
            "angular"
            ]
        },
        'ng-tags-input': {
            "deps": [
            "angular"
            ]
        },
        'ng-file-upload': {
            "deps": [
            "angular"
            ]
        },
        "angular-async-loader": {
            "deps": [
            "angular"
            ]
        },
    },
    map:{
        'angular': 'assets/angular/angular.min.js',
        'angular-ui-router': 'assets/angular-ui-router/release/angular-ui-router.min.js',
        'angular-async-loader': 'assets/angular-async-loader/angular-async-loader.min.js',
        'angular-ui-mask': 'assets/angular-ui-mask/dist/mask.min.js',
        'ng-tags-input': 'assets/ng-tags-input/build/ng-tags-input.min.js',
        "ng-file-upload": 'assets/ng-file-upload/dist/ng-file-upload-all.min.js'
    }
});

System
    .import(['angular', './app-routes.js'])
    .then(function (obj) {
        console.log(obj)
        // angular.element(document).ready(function () {
        //     angular.bootstrap(document, app);
        //     angular.element(document).find('html').addClass('ng-app');
        // });
    })

