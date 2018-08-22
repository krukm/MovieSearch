"use strict";
const movieList = {
    template:`
    <search-criteria></search-criteria>
    <section ng-repeat="movie in $ctrl.popMovies | limitTo:15">
        <p>{{ movie.title }}<p>
        <img src="https://image.tmdb.org/t/p/w500/{{movie.poster_path}}"></img>
        <a href="https://www.themoviedb.org/movie/{{movie.id}}">Link</a>
        <div>https://www.themoviedb.org/movie/{{movie.id}}/videos</div>
        <p>{{movie.overview}}</p>
    </section>
    <section ng-repeat="movie in $ctrl.searchMovies | limitTo:10">
        <p>{{ movie.title }}</p>
        <img src="https://image.tmdb.org/t/p/w500/{{movie.poster_path}}"></img>
        <a href="https://www.themoviedb.org/movie/{{movie.id}}">Link</a>
    </section>
        `,
        
        controller: ["MovieService", function(MovieService) {
            const vm = this;
            
            vm.displayOnPageOpen = () => {
                MovieService.searchMovies(vm.searchTerm).then((response) => {
                    vm.searchMovies = response.results;
                    });
            }
            vm.displayMovies = () => {
                MovieService.popularMovies().then((response) => {
                vm.popMovies = response.results;
                });
            };
            vm.displayOnPageOpen();
    }]
}

angular
    .module("app")
    .component("movieList", movieList);