var PagingFactory = function () {
    var currentPage = 0;
    var itemsPerPage;
    var itemsCount;
    var numberOfPages;
    var maxNumberOfPages;
    return {
        setParams: function (iPerPage, maxNumber) {
            itemsPerPage = iPerPage;
            maxNumberOfPages = maxNumber;
        },
        getItemsPerPage: function () {
            return itemsPerPage;
        },
        getCurrentPage: function () {
            return currentPage;
        },
        getArrayOfPages: function (page, count) {
            currentPage = page;
            itemsCount = count;
            numberOfPages = Math.ceil(itemsCount / itemsPerPage);
            if (numberOfPages > 1) {
                maxNumberOfPages = maxNumberOfPages > numberOfPages ? numberOfPages : maxNumberOfPages;
                var avg = Math.floor(maxNumberOfPages / 2);
                var leftArray = currentPage - avg;
                var rightArray = currentPage + avg + 1;
                if (leftArray < 0) {
                    rightArray = rightArray - leftArray;
                    leftArray = 0;
                }

                if (rightArray > numberOfPages) {
                    rightArray = numberOfPages;
                    leftArray = leftArray - rightArray + numberOfPages;
                }
                // Left navigation:
                var arrayOfPages = [];
                if (leftArray > 0) {
                    arrayOfPages.push({
                        name: "1 ...",
                        link: 0
                    });
                }

                if (currentPage > 1) {
                    arrayOfPages.push({
                        name: "<",
                        link: currentPage - 1
                    });
                }
                // Pages:
                for (var i = leftArray; i < currentPage; i++) {
                    var tempName = i + 1;
                    arrayOfPages.push({
                        name: tempName,
                        link: i
                    });
                }

                arrayOfPages.push({
                    name: currentPage + 1,
                    link: currentPage
                });

                for (var i = currentPage + 1; i < rightArray; i++) {
                    var tempName = i + 1;
                    arrayOfPages.push({
                        name: tempName,
                        link: i
                    });
                }
                // Right navigation:
                if (currentPage + 2 < numberOfPages) {
                    arrayOfPages.push({
                        name: ">",
                        link: currentPage + 1
                    });
                }
                if (rightArray < numberOfPages) {
                    arrayOfPages.push({
                        name: "... " + numberOfPages,
                        link: numberOfPages - 1
                    });
                }
                return arrayOfPages;
            }
            else {
                return false;
            }
        },
    }

};

PagingFactory.$inject = ['$resource'];
app.factory('PagingFactory', PagingFactory);