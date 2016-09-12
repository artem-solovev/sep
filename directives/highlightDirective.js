angular.module('highlightDirective',[]).directive('highlight', function() {

    return {

        restrict:'A',
        scope: {},
        replace:true,
        template:'<b>{{name}} <span class="label label-info"> Priority!</span></b>',
        link: function(scope, elem, attrs, controller) {
            scope.name = attrs.articlename;

        }
    }
})