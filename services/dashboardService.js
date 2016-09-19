app.factory( 'dashboardService', [ '$firebaseArray', '$http', '$q', function( $firebaseArray, $http, $q ) {
    var dashboardService = {};

    var journalsRef = firebase.database().ref( 'journals' );
    var journals = $firebaseArray( journalsRef );


    dashboardService.getAllJournals = function() {

        // Get the value of articles in each article and adding it like value to object
        journals.$loaded().then( function() {
            angular.forEach( journals, function( journal ) {
                var currentJournal = dashboardService.getCurrentJournal( journal.$id );
                var currentJournalLength = 0;

                // To add an element ARTICLES to each Journal
                currentJournal.$loaded().then( function() {

                    var pages = 0;

                    // Counting pages in each article
                    angular.forEach( currentJournal, function( article ) {
                        pages = pages + parseInt( article.pages );
                    } );

                    currentJournalLength = currentJournal.length;

                    journalsRef.child( journal.$id ).update( { articles: currentJournalLength } );
                    journalsRef.child( journal.$id ).update( { pages: pages } );
                } );


            } );

        } );

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
