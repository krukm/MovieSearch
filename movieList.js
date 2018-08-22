"use strict";
const movieList = {
    template:`
        <section>
        <search-criteria></search-criteria>
            <h1>Movie App</h1>
            <p></p>
        </section>
    `,

    controller: ['MovieService', 'SearchService', function(MovieService, SearchService) {
        const vm = this;
        vm.searchTerm = SearchService.getSearchTerm();
        console.log(vm.searchTerm);

    // put this inside a function
    MovieService.searchMovies(vm.searchTerm).then((response) => {
        vm.result = response;
        console.log(vm.searchTerm);
        console.log(vm.result.results[0].title);
    });

    }]
}



angular
    .module("app")
    .component("movieList", movieList);