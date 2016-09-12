app.controller( 'addArticleCtrl', [ 'articleService', function( articleService ) {
    /*
    articleForm structure
    - authors
    - title
    - date
    - category { id, name }
    - email
    - priority
    - email
    - priority
    - pages
    - files
    */
    this.articleForm = {};

    //this.eventForm.date = new Date(2016,0,1);

    this.categories = [{
        id: 1,
        name: 'Microeconomics'
    }, {
        id: 2,
        name: 'Macroeconomics'
    }, {
        id: 3,
        name: 'International economics'
    }, {
        id: 4,
        name: 'Practice'
    }];

    this.selectedOption = {
        id: 1,
        name: 'Microeconomics'
    };

    this.submitForm = function( form ) {

        form.category = this.selectedOption;
        form.files = "";

        articleService.createArticle( angular.copy( form )).then( function( data ) {
            alert( "Article Added Succesfully" );
        }, function( error ) {
            alert( 'An error occurred ' + error.statusText );
        });
    }
}]);
