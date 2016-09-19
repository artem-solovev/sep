var app = angular.module( 'journalApp', [ 'firebase', 'ngRoute', 'ngMessages', 'highlightDirective', 'pascalprecht.translate' ] );

app.constant( 'FIREBASE', 'https://sepjournal-991b7.firebaseio.com/' );

app.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {

    $routeProvider.when( '/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'loginCtl'
    } );

    $routeProvider.when( '/logout', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'loginCtl',
        resolve: {
            "logout": [ "authService", function( authService ) {
                authService.signOut();
            }]
        }
    } );

    $routeProvider.when( '/', {
        templateUrl: 'views/home.html'
    });

    $routeProvider.when( '/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl',
        controllerAs: 'dashCtl',
        resolve: {
            "initialData": function( dashboardService ) {
                return dashboardService.getAllJournals();
            },
            "currentAuth": [ "authService", function( authService ) {
                var auth = authService.auth();
                return auth.$requireSignIn();
            }]
        }
    });

    $routeProvider.when( '/settings', {
        templateUrl: 'views/settings.html',
        resolve: {
            "currentAuth": [ "authService", function( authService ) {
                var auth = authService.auth();
                return auth.$requireSignIn();
            }]
        }
    });

    $routeProvider.when('/add-article', {
        templateUrl:'views/add-article.html',
        controller: 'addArticleCtrl',
        controllerAs:'addArticleCtl',
        resolve: {
            "currentAuth": [ "authService", function( authService ) {
                var auth = authService.auth();
                return auth.$requireSignIn();
            }]
        }
    });

    $routeProvider.when('/article-list', {
        templateUrl:'views/article-list.html',
        controller: 'articlesManagerCtrl',
        controllerAs:'articlesManagerCtl',
        resolve: {
            "initialData": function( articleService ) {
                return articleService.getAllArticles();
            },
            "currentAuth": [ "authService", function( authService ) {
                var auth = authService.auth();
                return auth.$requireSignIn();
            }]
        }

    });

    $routeProvider.otherwise( {
        redirectTo: '/'
    } );

    $locationProvider.html5Mode( true );

} ] );

app.config( ['$translateProvider', function ( $translateProvider ) {
    // add translation tables
    $translateProvider.translations( 'en', translationsEN );
    $translateProvider.translations( 'ru', translationsRU );
    $translateProvider.preferredLanguage( 'ru' );
    $translateProvider.fallbackLanguage( 'ru' );
}]);

app.run( [ "$rootScope", "$location", function( $rootScope, $location ) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        if (error === "AUTH_REQUIRED") {
            $location.path("/login");
        }
    });
} ] );