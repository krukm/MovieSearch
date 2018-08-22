'use strict';

function SearchService () {
    const vm = this;
    vm.searchTerm = null;

    vm.setSearchTerm = (searchTerm) => {
        console.log('In Search Service set');
        vm.searchTerm = searchTerm;
    }

    vm.getSearchTerm = () => {
        console.log('in search service get');
        return vm.searchTerm;
    }
}

angular.module('app').service('SearchService', SearchService);