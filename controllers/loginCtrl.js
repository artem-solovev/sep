app.controller( 'loginCtrl', [ 'authService', function( authService ) {
    var self = this;

    self.signUp = function() {
        authService.createUser(self.email, self.password);
    };

    self.logIn = function() {
        authService.authUser(self.loginEmail, self.loginPassword);
    };

    self.signOut = function() {
        authService.signOut();
    };
}]);