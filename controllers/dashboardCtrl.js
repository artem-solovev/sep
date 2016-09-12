app.controller( 'dashboardCtrl', [ 'dashboardService', 'initialData', function( dashboardService, initialData ) {
    var self = this;
    self.edit = {};
    self.journalList = initialData;

    this.journalForm = {};

    self.createJournal = function( journal ) {

        dashboardService.createJournal( angular.copy( journal )).then( function( data ) {
            alert( "Article Added Succesfully" );
        }, function( error ) {
            alert( 'An error occurred ' + error.statusText );
        });
    }
} ]);