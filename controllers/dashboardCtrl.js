app.controller( 'dashboardCtrl', [ 'dashboardService', 'initialData', '$scope', function( dashboardService, initialData, $scope ) {
    var self = this;
    self.edit = {};
    self.journalList = initialData;

    this.journalForm = [];

    self.currentJournal = {};

    self.getArticlesFromJournal = function( $index ) {
        var journalId = self.journalList[$index].$id;
        self.currentJournal = dashboardService.getCurrentJournal( journalId );
        console.warn( "$scope.currentJournal ");
        console.warn( $scope.currentJournal );
    };

    self.createJournal = function( journal ) {

        dashboardService.createJournal( angular.copy( journal )).then( function( data ) {
            alert( "Article Added Succesfully" );
        }, function( error ) {
            alert( 'An error occurred ' + error.statusText );
        });
    };

} ]);