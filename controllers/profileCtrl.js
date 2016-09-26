app.controller( 'profileCtrl', [ 'authService', function( authService ) {

    var self = this;

    self.edit = {};

    self.userProfile = {};

    self.info = authService.getUserInfo();

    self.getInfo = function() {
        //console.log( self.info );
        console.log( self.userProfile );
    };

    self.submitForm = function( data ) {
        authService.updateUserProfile( self.info.$id, data );
        //self.info = authService.getUserInfo();
    };

    self.activateAccount = function() {
        authService.sendActivationEmail();
    };

} ] );