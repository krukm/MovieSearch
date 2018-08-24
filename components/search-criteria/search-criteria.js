"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', 'MovieDetailsService',  function(SearchService, MovieService, WatchListService, MovieDetailsService) {
        const vm = this;
        vm.result = null;
        vm.genreList = null;
        vm.searchTerm = SearchService.getSearchTerm();

        vm.addToWatchlist = (movie) => {
            WatchListService.addToWatchlist(movie);
        } 
        
        vm.setCurrentMovie = (movie) => {
            MovieDetailsService.setCurrentMovie(movie);
        }

        vm.getMovieByGenre = (searchTerm, genre) => {
            if (searchTerm === '') {
                searchTerm = null;
            };
            MovieService.resetGenreResults();
            MovieService.searchByGenre(searchTerm, genre).then((response) => {
            SearchService.setSearchTerm(searchTerm);
            vm.result = response;
           });
        }

        vm.getGenreList = () => {
            MovieService.genreList().then((response) => {
                vm.genreList = response.genres;
            });
        };

        if (vm.searchTerm !== null) {
            vm.getMovieByGenre(vm.searchTerm);
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