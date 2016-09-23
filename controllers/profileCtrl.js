app.controller( 'profileCtrl', [ 'authService',  function( authService ) {

    var self = this;

    self.info = authService.getUserInfo();

    self.getInfo = function() {
        console.log( self.userInfo );
        console.warn( authService.getUserInfo() );
    }

} ] );