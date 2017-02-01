var PaginationFactory = function () {
    var currentPage = 0;
    var itemsPerPage = 5;
    var items = [];
    return {
        setItems: function (newItems, iPerPage) {
            items = newItems;
            itemsPerPage = iPerPage;
        },
        
        getPageItems: function (numberOfPage) {
            var numberOfPage = angular.isUndefined(numberOfPage) ? 0 : numberOfPage;
            currentPage = numberOfPage;

            var first = itemsPerPage * numberOfPage;
            var last = first + itemsPerPage;
            last = last > items.length ? (items.length) : last;
            return items.slice(first, last);
        },

        getNumberOfPages: function () {
            return Math.ceil(items.length / itemsPerPage);
        },

        getArrayOfPages: function () {
            var numberOfPages = this.getNumberOfPages();
            var arrayOfPages = [];
            arrayOfPages.push({
                name: '<',
                link: 'prev'
            });
            for (var i = 0; i < numberOfPages; i++) {
                var tempName = i + 1;
                arrayOfPages.push({
                    name: tempName,
                    link: i
                });
            }
            arrayOfPages.push({
                name: '>',
                link: 'next'
            });
            if (numberOfPages > 1) {
                return arrayOfPages;
            }
            else {
                return false;
            }
        },

        getCurrentPage: function () {
            return currentPage;
        },

        getPrevPage: function () {
            var prevPage = currentPage < 1 ? 0 : currentPage - 1;
            return this.getPageItems(prevPage);
        },

        getNextPage: function () {
            var nextPage = currentPage + 1 < this.getNumberOfPages() ? currentPage + 1 : this.getNumberOfPages() - 1;
            return this.getPageItems(nextPage);
        }
    }
    
};

PaginationFactory.$inject = ['$resource'];
app.factory('PaginationFactory', PaginationFactory);