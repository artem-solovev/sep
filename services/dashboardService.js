app.factory( 'dashboardService', [ '$firebaseArray', '$http', '$q', function( $firebaseArray, $http, $q ) {
    var dashboardService = {};

    var journalsRef = firebase.database().ref( 'journals' );
    var journals = $firebaseArray( journalsRef );


    dashboardService.getAllJournals = function() {
        console.info( journals );

        return journals;
    }

    dashboardService.createJournal = function( journal ) {
        return journals.$add( journal );
    }

    dashboardService.getCurrentJournal = function( journalId ) {
        var journal = $firebaseArray( firebase.database().ref( 'articles/' + journalId ) );
        return journal;
    };

    return dashboardService;
}]);
