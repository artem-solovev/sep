app.factory( 'authService',  [ '$firebaseAuth', '$window', function( $firebaseAuth, $window ) {

    var authService = {};

    var auth = $firebaseAuth(firebase.auth());

    authService.createUser = function(email, password) {
        auth.$createUserWithEmailAndPassword( email, password );
    };

    authService.authUser = function( email, password ) {
        auth.$signInWithEmailAndPassword( email, password ).then(function( user ) {
            $window.location.href = "/";
        }, function( error ) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.info( "Error in authUser - errorCode: " + errorCode + ". errorMessage: " + errorMessage);
        });
    };

    authService.signOut = function() {
        auth.$signOut();
    };

    authService.auth = function() {
        return auth;
    };

    return authService;
}]);
