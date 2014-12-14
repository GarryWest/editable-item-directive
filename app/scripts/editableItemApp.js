angular.module('editableItems', []).
    directive('makeEditable', function($sce) {
        return {
            restrict: 'EA',
            templateUrl: 'editable-items.html',
            transclude: true,
            scope: true,
            link: function(scope, element, attrs) {
                scope.editMode = false;
            }   
        }
});
