function binarySearch(list, element) {
    var left = 0;
    var right = list.length - 1;
    var middle;

    while (left <= right) {
        middle = Math.floor((left + right)/2)
        if (list[middle] < element) left = middle + 1;
        else if (list[middle] > element) right = middle - 1;
        else return middle;
    }

    return -1;
}


/**
 * References:
 * https://en.wikipedia.org/wiki/Binary_search_algorithm to understand 
 * different possible procedures for binary search
 */