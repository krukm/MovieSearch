"use strict";
const movieDetails = {
    template:
       ` <h3>{{ $ctrl.currentMovie.title }}</h3>
        <button type="button">Add</button>
        <iframe src="https://www.youtube.com/embed/{{$ctrl.key}}"
        width="560" height="315" frameborder="0"></iframe>
        <p>Release Date: {{ $ctrl.currentMovie.release_date }}</p>
        <p>Rating: {{ $ctrl.currentMovie.vote_average }}/10</p>
        <p>{{ $ctrl.currentMovie.overview }}</p>`,
        


    controller: ["MovieDetailsService", "TrailerService", function(MovieDetailsService, TrailerService) {
        const vm = this;
            vm.key = null;
            vm.currentMovie = MovieDetailsService.getCurrentMovie()
            console.log(vm.currentMovie.id);
          
            vm.getTrailerKey = () => {
                TrailerService.setTrailer(vm.currentMovie.id).then((response) => {
                    vm.key = response;
                    console.log(vm.key);
                    console.log(response);
                })
            }


         vm.getTrailerKey();
        

  

      


    }]
}





angular
    .module("app")
    .component("movieDetails", movieDetails);