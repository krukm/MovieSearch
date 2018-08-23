"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', function(SearchService, MovieService, WatchListService) {
        const vm = this;
        vm.result = null;
    
        vm.getSearchResults = (searchTerm) => {
            MovieService.searchMovies(searchTerm).then((response) => {
                vm.result = response;
                SearchService.setSearchTerm(searchTerm);
                console.log(vm.result);
            });
            vm.addToWatchlist = (movie) => {
                WatchListService.addToWatchlist(movie);
               
            }  
        }
        // Search by Specfic filters
        //2018 Top Films
        vm.getTopYearList = () => {
            MovieService.topYearList().then((response) => {
            vm.result = response;
            });
        };
        //Big Budget Films
        vm.getBigBudgetList = () => {
            MovieService.bigBudgetList().then((response) => {
            vm.result = response;
            });
        };
        //Popular Kids films
        vm.getKidFilmList = () => {
            MovieService.kidFilmList().then((response) => {
            vm.result = response;
            });
        };
        //top rated 90's films
        vm.getNinetiesList = () => {
            MovieService.ninetiesList().then((response) => {
            vm.result = response;
            });
        };
        //top rated 80s films
        vm.getEightiesList = () => {
            MovieService.eightiesList().then((response) => {
            vm.result = response;
            });
        };
        //french
        vm.getFrenchList = () => {
            MovieService.frenchList().then((response) => {
            vm.result = response;
            });
        };
        //Japanese
        vm.getJapaneseList = () => {
            MovieService.japaneseList().then((response) => {
            vm.result = response;
            });
        };
        //romantic comedy
        vm.getRomanticComedyList = () => {
            MovieService.romanticComedyList().then((response) => {
            vm.result = response;
            });
        };
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);