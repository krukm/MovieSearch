"use strict"
const movieList = {
    template:`<p>Movies!!!!</p>
              <p>{{$ctrl.katie}}</p>`,

    controller: ["MovieService", function(MovieService) {
      const vm = this;
      vm.katie = MovieService.matty
    }]
}



angular
    .module("app")
    .component("movieList", movieList)