"use strict";
const movieList = {
    // templateUrl:"components/movie-list/movie-list.html",
    template: `
    <search-criteria></search-criteria>
<h2 id="popularMovies">Popular Movies:</h2>
<section class="movies">
    <section ng-repeat="movie in $ctrl.popMovies ">
        <figure>
            <img src="https://image.tmdb.org/t/p/w500/{{movie.poster_path}}">
            <i class="material-icons" ng-class="{ clicked: toggle }" ng-click="$ctrl.addToWatchlist(movie); toggle = !toggle" >remove_red_eye</i>
        </figure>
        <details >
            <summary>
                {{movie.title}}
            </summary>
            <h3>{{movie.title}}</h3>
            <p id="overview">{{ movie.overview }}<a href="#!/movieDetails" ng-click="$ctrl.setCurrentMovie(movie);">more...</a> </p>
        </details> 
    </section>
    <button id="moar" ng-init="count=2" ng-click="$ctrl.loadMore(count); count=count+1;">Load Page {{count}}</button>
</section>
    `,
        
        controller: ["MovieService", "WatchListService", "MovieDetailsService", function(MovieService, WatchListService, MovieDetailsService) {
            const vm = this;
        
            vm.displayOnPageOpen = () => {
                vm.displayMovies();
            };

            vm.displayMovies = () => {
                MovieService.popularMovies().then((response) => {
                vm.popMovies = response.results;
                });
            };
            vm.addToWatchlist = (movie) => {
                WatchListService.addToWatchlist(movie);   
            };
            //vm.displayOnPageOpen();

            vm.setCurrentMovie = (movie) => {
                MovieDetailsService.setCurrentMovie(movie);
                console.log(movie);
            };
            vm.loadMore = function(count) {
                document.getElementById("popularMovies").scrollIntoView();
                MovieService.getMore(count).then(function(response){
                    vm.popMovies = response.results;
                })
            };
            vm.loadMore();
    }]

}



angular
    .module("app")
    .component("movieList", movieList);




