var fessmodule = angular.module('myModule', []);

fessmodule.controller('ctrlRead', function ($scope, $filter) {

    // init
    $scope.sort = {       
                sortingOrder : 'fdate',
                reverse : true
            };
    
    $scope.gap = 3;
    
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 10;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [
        {"id":1,"assessmenttype":"type 1","name":"name 1","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":2,"assessmenttype":"type 2","name":"name 2","sdate":"sdate 2","fdate":"12.04.2016","project":"project 2","unit":"unit 2","projectmanager":"projectmanager 2","techlead":"techlead 2","coordinator":"coordinator 2","experts":"expert 2, expert 3"},
        {"id":3,"assessmenttype":"type 3","name":"name 3","sdate":"sdate 3","fdate":"10.03.2016","project":"project 3","unit":"unit 3","projectmanager":"projectmanager 3","techlead":"techlead 3","coordinator":"coordinator 3","experts":"expert 3, expert 1, expert8"},
        {"id":4,"assessmenttype":"type 1","name":"name 4","sdate":"sdate 1","fdate":"11.03.2016","project":"project 12","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":5,"assessmenttype":"type 1","name":"name 5","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":6,"assessmenttype":"type 1","name":"name 6","sdate":"sdate 1","fdate":"13.10.2010","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":7,"assessmenttype":"type 1","name":"name 7","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":8,"assessmenttype":"type 1","name":"name 8","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":9,"assessmenttype":"type 1","name":"name 9","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":10,"assessmenttype":"type 1","name":"name 10","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":11,"assessmenttype":"type 1","name":"name 11","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":12,"assessmenttype":"type 1","name":"name 12","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":13,"assessmenttype":"type 1","name":"name 13","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":14,"assessmenttype":"type 1","name":"name 14","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":15,"assessmenttype":"type 1","name":"name 15","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":16,"assessmenttype":"type 1","name":"name 16","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":17,"assessmenttype":"type 1","name":"name 17","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":18,"assessmenttype":"type 1","name":"name 18","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":19,"assessmenttype":"type 1","name":"name 19","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":21,"assessmenttype":"type 1","name":"name 20","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":22,"assessmenttype":"type 1","name":"name 21","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":23,"assessmenttype":"type 1","name":"name 22","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":24,"assessmenttype":"type 1","name":"name 23","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":25,"assessmenttype":"type 1","name":"name 24","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":26,"assessmenttype":"type 1","name":"name 25","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":27,"assessmenttype":"type 1","name":"name 26","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":28,"assessmenttype":"type 1","name":"name 27","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":29,"assessmenttype":"type 1","name":"name 28","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":30,"assessmenttype":"type 1","name":"name 29","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":31,"assessmenttype":"type 1","name":"name 30","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":32,"assessmenttype":"type 1","name":"name 31","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":33,"assessmenttype":"type 1","name":"name 32","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":34,"assessmenttype":"type 1","name":"name 33","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":35,"assessmenttype":"type 1","name":"name 34","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":36,"assessmenttype":"type 1","name":"name 35","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":37,"assessmenttype":"type 1","name":"name 36","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":38,"assessmenttype":"type 1","name":"name 37","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":39,"assessmenttype":"type 1","name":"name 38","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":40,"assessmenttype":"type 1","name":"name 39","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":41,"assessmenttype":"type 1","name":"name 40","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":42,"assessmenttype":"type 1","name":"name 41","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":43,"assessmenttype":"type 1","name":"name 42","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":44,"assessmenttype":"type 1","name":"name 43","sdate":"sdate 1","fdate":"13.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":45,"assessmenttype":"type 1","name":"name 44","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":46,"assessmenttype":"type 1","name":"name 45","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":47,"assessmenttype":"type 1","name":"name 46","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":48,"assessmenttype":"type 1","name":"name 47","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":49,"assessmenttype":"type 1","name":"name 48","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":50,"assessmenttype":"type 1","name":"name 49","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":51,"assessmenttype":"type 1","name":"name 50","sdate":"sdate 1","fdate":"11.03.2016","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":52,"assessmenttype":"type 1","name":"name 51","sdate":"sdate 1","fdate":"15.03.2014","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"},
        {"id":53,"assessmenttype":"type 1","name":"name 52","sdate":"sdate 1","fdate":"1.04.2010","project":"project 1","unit":"unit 1","projectmanager":"projectmanager 1","techlead":"techlead 1","coordinator":"coordinator 1","experts":"expert 1, expert 2"}
    ];


    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
    };
    
  
    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };
    
    $scope.range = function (size,start, end) {
        var ret = [];        
        console.log(size,start, end);
                      
        if (size < end) {
            end = size;
            start = size-$scope.gap;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }        
         console.log(ret);        
        return ret;
    };
    
    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };
    
    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();

   

});


fessmodule.$inject = ['$scope', '$filter'];

fessmodule.directive("customSort", function() {
return {
    restrict: 'A',
    transclude: true,    
    scope: {
      order: '=',
      sort: '='
    },
    template : 
      ' <a ng-click="sort_by(order)" style="color: #555555;">'+
      '    <span ng-transclude></span>'+
      '    <i ng-class="selectedCls(order)"></i>'+
      '</a>',
    link: function(scope) {
                
    // change sorting order
    scope.sort_by = function(newSortingOrder) {       
        var sort = scope.sort;
        
        if (sort.sortingOrder == newSortingOrder){
            sort.reverse = !sort.reverse;
        }                    

        sort.sortingOrder = newSortingOrder;        
    };
    
   
    scope.selectedCls = function(column) {
        if(column == scope.sort.sortingOrder){
            return ('fa fa-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
        }
        else{            
            return'icon-sort' 
        } 
    };      
  }// end link
}
});
