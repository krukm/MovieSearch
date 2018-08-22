"use strict"
const movieList = {
    template:`
    <section ng-repeat="movie in $ctrl.popMovies | limitTo:10">
    <p>{{ movie.title }}<p>
    <img src="https://image.tmdb.org/t/p/w500/{{movie.poster_path}}"></img>
    <a href="https://www.themoviedb.org/movie/{{movie.id}}">Link</a>
    </section>
    <section ng-repeat="movie in $ctrl.searchMovies | limitTo:10">
    <p>{{ movie.title }}<p>
    <img src="https://image.tmdb.org/t/p/w500/{{movie.poster_path}}"></img>
    <a href="https://www.themoviedb.org/movie/{{movie.id}}">Link</a>
    </section>
    `,
    
    controller: ["MovieService", function(MovieService) {
        const vm = this;

        vm.displayOnPageOpen = () => {
            vm.displayMovies("matrix");
            
        }
        // put this inside a function
        vm.displayMovies = (search) => {
            MovieService.popularMovies().then((response) => {
            vm.popMovies = response.results;
            });
            MovieService.searchMovies(search).then((response) => {
            vm.searchMovies = response.results;
            });
        };
        vm.displayOnPageOpen();
    }]
}



angular
    .module("app")
    .component("movieList", movieList)