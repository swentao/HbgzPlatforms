angular.module("indexApp", ["ionic","ui.router","indexApp.controllers","indexApp.services"])
    .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');



        $stateProvider
            .state('main', {
                url:"/main",
                cache:false,
                templateUrl:"main.html",
                controller: 'mainCtrl'
            })
            .state('yxlist', {
                url:"/yxlist",
                cache:false,
                templateUrl:"yxlist.html",
                controller: 'yxslistCtrl'
            })
            .state('detail', {
                url:"/detail/:aid",
                cache:false,
                templateUrl:"detail.html",
                controller: 'detailCtrl'
            })
            .state('zixun', {
                url:"/zixun/:cid/:cityname",
                cache:false,
                templateUrl:"zixun.html",
                controller: 'zixunCtrl'
            })
            .state('article', {
                url:"/article/:aid",
                cache:false,
                templateUrl:"article.html",
                controller: 'articleCtrl'
            })
        ;
        //两个模块控制器不能一样，或者控制器有问题
        $urlRouterProvider.otherwise("/main");
    });
