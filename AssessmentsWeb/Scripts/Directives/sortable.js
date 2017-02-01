app.directive('sortable', function () {
    return {
        link: function (scope, element, attrs) {
            scope.$on('sorted', function (ev, val) {
                scope.items.splice(val.to, 0, scope.items.splice(val.from, 1)[0]);
            });

            // Make the element sortable and revert when dropped incorrectly
            element.sortable({
                revert: true,
                //items: '.resultLine2',
                //connectWith: '.resultLine'
                //change: function(ev, ui) {}
            });

            // When dragged element is released. ui.item is the item being dragged
            element.on("sortdeactivate", function (event, ui) {
                // Get the scope of the item being dragged (local scope) and find the index
                var from = angular.element(ui.item).scope().$index;
                // Get index of the element the dragged elements new position
                var to = element.children().index(ui.item);

                if (to >= 0) {
                    scope.$apply(function () {
                        scope.$emit('sorted', { from: from, to: to });
                    });
                }
            });
        }
    };
});