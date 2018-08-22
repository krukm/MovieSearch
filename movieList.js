"use strict";
const movieList = {
    template:`
<<<<<<< HEAD
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

=======
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
>>>>>>> 2e686bdbd1fac7d3b7cc97b90da13342dafac103
    }]
}

angular
    .module("app")
    .component("movieList", movieList);