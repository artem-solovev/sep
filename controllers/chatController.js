app.controller( "commentsCtrl", function( $scope, $timeout, $location, $anchorScroll ) {

    $scope.edit = [];

    $scope.comments = [
        { 
            date: "1382086394000",
            text: "Hello Anny & adam. Piss out admin! Please check out my new photos! Please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please!", 
            author: "Artem Solovev",
            files: [
                {
                    fullPath: "https://firebasestorage.googleapis.com/v0/b/angular-3410b.appspot.com/o/images%2F404.gif?alt=media&token=4146f876-fd8e-45e7-b78b-07e09c11600c",
                    name: "404.gif"
                },
                {
                    fullPath: "https://firebasestorage.googleapis.com/v0/b/angular-3410b.appspot.com/o/images%2F404.gif?alt=media&token=4146f876-fd8e-45e7-b78b-07e09c11600c",
                    name: "404.gif"
                }
            ]
        },
        {
            date: "1382086364340",
            text: "Enough already. I'm administrator of this chat! You know what i mean?",
            author: "Admin"
        },
        {
            date: "1382086323003",
            text: "Good evening. I'm pretty young lady and want you to tell story about Bubble-Bible Don. Once upon a time...",
            author: "Ann Void"
        },
        {
            date: "1382023639400",
            text: "Hi. I don't care about my money.",
            author: "Leprechaun"
        },
        {
            date: "1382086392300",
            text: "Hello everyone. I'm the greatest man in economic theory!",
            author: "Adam Smith"
        },
        {
            date: "1111111111111",
            text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
            author: "Jesus"
        }
    ];

    $scope.sendComment = function() {
        var d = new Date();
        var n = d.getTime();

        $scope.comments.push( {
            date: n,
            text: $scope.addMe,
            author: "Artem Solovev"
        } );

        $scope.addMe = "";

        /*$timeout(function() {
            $location.hash('endOfComments');
            $anchorScroll();
        })*/

    };

    $scope.removeMsg = function( $index ) {

        if ( confirm("Are you sure?") == true ) {
            $scope.comments.splice( $index, 1 );
        }

    };

    $scope.editMsg = function( $index ) {
        $scope.edit[$index]= true;
    };

} );
