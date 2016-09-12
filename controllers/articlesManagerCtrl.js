app.controller( 'articlesManagerCtrl', [ 'articleService', 'initialData', function( articleService, initialData ) {

    var self = this;
    self.edit = {};
    self.articleList = initialData;

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