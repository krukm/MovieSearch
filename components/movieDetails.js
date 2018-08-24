"use strict";
const movieDetails = {
    template:
       ` <h3>{{ $ctrl.currentMovie.title }}</h3>
        <button type="button">Add</button>
        <iframe ng-src="{{$ctrl.trailerSrc}}"
        width="560" height="315" frameborder="0"></iframe>
        <p>Release Date: {{ $ctrl.currentMovie.release_date }}</p>
        <p>Rating: {{ $ctrl.currentMovie.vote_average }}/10</p>
        <p>{{ $ctrl.currentMovie.overview }}</p>`,

    controller: ["MovieDetailsService", "TrailerService", function(MovieDetailsService, TrailerService) {
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

        vm.setTrailerSrc();
    }]
}

angular
    .module("app")
    .component("movieDetails", movieDetails);