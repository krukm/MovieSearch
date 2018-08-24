"use strict";
const movieDetails = {
    template:
       `<header><nav><a href="#!/movieList"><img id="logo" src="gopher.png"></a><h1>Movie Gopher</h1><ul><li><a href="#!/movieList" id="movielist">Movie List</a></li><li><a href="#!/watchList" id="watchlist">Watch List</a></li></ul></nav></header> <section class="movie-details">
        <h2>{{ $ctrl.currentMovie.title }} <i class="material-icons" id="details-eye" ng-class="{ clicked: toggle }" ng-click="$ctrl.addToWatchList($ctrl.currentMovie); toggle = !toggle" >remove_red_eye</i></h2>
        <iframe ng-src="{{$ctrl.trailerSrc}}"
        width="560" height="315" frameborder="0"></iframe>
        <p><span class="release">Release Date:</span> {{ $ctrl.currentMovie.release_date }}</p>
        <p><span class="rating">Rating</span> {{ $ctrl.currentMovie.vote_average }}/10</p>
        <p><span class="synopsis">Synopsis: </span>{{ $ctrl.currentMovie.overview }}</p></section>
       `,

    controller: ["MovieDetailsService", "TrailerService", "WatchListService", function(MovieDetailsService, TrailerService, WatchListService) {
        const vm = this;
        vm.trailerSrc = null;
        vm.key = TrailerService.getTrailerKey();
        vm.currentMovie = MovieDetailsService.getCurrentMovie();
        
        vm.setTrailerSrc = () => {
            TrailerService.setTrailerKey(vm.currentMovie.id).then((response) => {
                vm.key = response;
                vm.trailerSrc = 'https://www.youtube.com/embed/' + vm.key;
                return response;
            });
        }
        vm.addToWatchList = () => {
            WatchListService.addToWatchlist(vm.currentMovie);
          }
      
        vm.setTrailerSrc();
    }]
}

angular
    .module("app")
    .component("movieDetails", movieDetails);