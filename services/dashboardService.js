app.factory( 'dashboardService', [ '$firebaseArray', '$http', '$q', function( $firebaseArray, $http, $q) {
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

    return dashboardService;
}]);
