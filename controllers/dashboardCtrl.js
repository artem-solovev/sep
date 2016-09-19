app.controller( 'dashboardCtrl', [ 'dashboardService', 'initialData', '$scope', function( dashboardService, initialData, $scope ) {
    var self = this;
    self.edit = {};
    self.journalList = initialData;

    this.journalForm = [];

    self.currentJournal = {};

    self.currentJournalId = null;

    self.currentArticle = null;

    self.currentJournalInfo = null;

    self.getArticlesFromJournal = function( $index ) {
        self.currentJournalId = self.journalList[$index].$id;
        self.currentJournal = dashboardService.getCurrentJournal( self.currentJournalId );
        console.warn( "self.currentJournal ");
        console.warn( self.currentJournal );

        self.currentJournalInfo = self.getCurrentJournalInfo( $index );
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

    self.unassignArticle = function( $index ) {
        if ( confirm("Do you wanna move it to unsorted articles?") == true ) {
            dashboardService.unassignArticle( self.currentJournal[$index], self.currentJournalId );
        }
    };

    self.getCurrentJournalInfo = function( $index ) {
        return self.journalList[$index];
    };

} ]);