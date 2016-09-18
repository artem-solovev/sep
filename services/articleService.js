app.factory( 'articleService', [ '$firebaseArray', '$http', '$q', function( $firebaseArray, $http, $q) {
    var articleService = {};

    var articlesRef = firebase.database().ref( 'articles/others' );
    var articles = $firebaseArray( articlesRef );


    articleService.getAllArticles = function() {
        console.log( articles );
        return articles;
    };

    articleService.createArticle = function( article ) {
        article.id = articles.length + 1;
        return articles.$add( article );
    };

    articleService.deleteArticle = function( article ) {
        return articles.$remove( article );
    };

    articleService.updateArticle = function( article ) {
        return articles.$save( article );
    };

    articleService.moveArticleTo = function( journalId, articleObj ) {
        var journalRef = firebase.database().ref( 'articles/' + journalId );
        var currentJournal = $firebaseArray( journalRef );

        currentJournal.$add( articleObj );
        articles.$remove( articleObj );
    };

    return articleService;
}]);
