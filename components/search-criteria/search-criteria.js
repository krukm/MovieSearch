"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', function(SearchService, MovieService, WatchListService) {
        const vm = this;
        vm.result = null;
        vm.genreList = null;
        vm.searchTerm = SearchService.getSearchTerm();

        vm.addToWatchlist = (movie) => {
            WatchListService.addToWatchlist(movie);
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
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);