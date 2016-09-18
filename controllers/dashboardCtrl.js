app.controller( 'dashboardCtrl', [ 'dashboardService', 'initialData', '$scope', function( dashboardService, initialData, $scope ) {
    var self = this;
    self.edit = {};
    self.journalList = initialData;

    this.journalForm = [];

    self.currentJournal = {};
    
    self.currentArticle = null;

    self.getArticlesFromJournal = function( $index ) {
        var journalId = self.journalList[$index].$id;
        self.currentJournal = dashboardService.getCurrentJournal( journalId );
        console.warn( "self.currentJournal ");
        console.warn( self.currentJournal );
    };

    self.createJournal = function( journal ) {

        dashboardService.createJournal( angular.copy( journal )).then( function( data ) {
            alert( "Article Added Succesfully" );
        }, function( error ) {
            alert( 'An error occurred ' + error.statusText );
        });
    };
    
    self.showArticleRoom = function( $index ) {
        self.currentArticle = self.currentJournal[$index];
        console.log( "$index " + angular.toJson( self.currentJournal[$index] ) );
    };

} ]);