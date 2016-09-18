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

    dashboardService.unassignArticle = function( articleObj, journalId ) {
        var others = $firebaseArray( firebase.database().ref( 'articles/others' ) );
        var neededArticle = firebase.database().ref( 'articles/' + journalId + '/' + articleObj.$id );

        others.$add( articleObj );
        neededArticle.remove();
    };

    return dashboardService;
}]);
