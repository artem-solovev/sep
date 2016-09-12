app.controller( 'articlesManagerCtrl', [ 'articleService', 'dashboardService', 'initialData', function( articleService, dashboardService, initialData ) {

    var self = this;
    self.edit = {};
    self.articleList = initialData;
    self.journalList = dashboardService.getAllJournals();

    this.selectedJournal = {
    };

    self.moveArticle = function( journalId, articleId, $index ) {
        articleService.moveArticleTo( journalId, self.articleList[$index] );
    };

    self.update = function( article ) {

        if ( confirm("Do you wanna save it?") == true ) {
            articleService.updateArticle( article ).then( function( data ) {
                return;
            }, function( error ) {
                alert( 'An error occurred while updating the article' );
            });
        }
    };

    self.delete = function( article ) {

        if ( confirm("Are you sure?") == true ) {
            articleService.deleteArticle( article ).then(function( data ) {
                return;

            }, function( error ) {
                alert( 'An error occurred' );
            });
        }

    };
}]);