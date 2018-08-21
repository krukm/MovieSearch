"use strict"
const movieList = {
    template:`<p>Adrean</p>`,

    controller: ["MovieService", function(MovieService) {
      const vm = this;

    // put this inside a function
    MovieService.searchMovies("matrix").then((response) => {
        vm.searchMovies = response;
        console.log(vm.searchMovies.overview);  
    })

    }]
}



angular
    .module("app")
    .component("movieList", movieList)