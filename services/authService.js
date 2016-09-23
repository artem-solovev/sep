app.factory( 'authService',  [ '$firebaseObject', '$firebaseAuth', '$window', function( $firebaseObject, $firebaseAuth, $window ) {

    var authService = {};

    var auth = $firebaseAuth(firebase.auth());

    authService.createUser = function(email, password) {
        auth.$createUserWithEmailAndPassword( email, password );
    };

    authService.authUser = function( email, password ) {
        auth.$signInWithEmailAndPassword( email, password ).then(function( user ) {
            authService.userExists( firebase.auth().currentUser.uid,
                                   firebase.auth().currentUser.email,
                                   firebase.auth().currentUser.emailVerified);
            console.log( firebase.auth().currentUser );
            //$window.location.href = "/";
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

    authService.getUserInfo = function() {
        var path = 'users/' + firebase.auth().currentUser.uid;;

        var userRef = firebase.database().ref( path ) ;
        var user = $firebaseObject( userRef );

        console.log( user );

        return user;
    };

    authService.userExists = function( uid, email, emailVerified ) {
        var usersRef = firebase.database().ref( 'users' );

        usersRef.once( "value", function( snap ) {
            if( snap.exists() ) {
                // User exists
            } else {
                authService.createUserNode( uid, email, emailVerified );
            }
        } );
    };

    authService.createUserNode = function( uid, email, emailVerified ) {
        var usersRef = firebase.database().ref( 'users/' );

        usersRef.child( uid ).set( {
            email: email,
            emailVerified: emailVerified
        } );
    };

    authService.updateUserProfile = function( uid, data ) {
        var usersRef = firebase.database().ref( 'users/' );

        usersRef.child( uid ).update( data );

    };

    return authService;
}]);
