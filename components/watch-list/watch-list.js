"use strict";

const watchList = {
    // templateUrl: "components/watch-list/watch-list.html",
    template: `
    <header>
        <nav>
            <a href="#!/movieList">
                <img id="logo" src="gopher.png">
            </a>
            <h1>Movie Gopher</h1>
            <ul>
                <li>
                    <a href="#!/movieList" id="movielist">Movie List</a>
                </li> 
                <li> 
                    <a href="#!/watchList" id="watchlist">Watch List</a>
                </li>
            </ul>
            
        </nav>
        
    </header>
<h1 class="list-title">Your Watch List</h1>
<p class="empty" ng-if="$ctrl.movieList.length <= 0">You don't have any movies saved to your Watch List yet!</p>


<section class="movies">
    <section ng-repeat="movie in $ctrl.movieList track by $index">
        <section class="poster-button">
        <img src="https://image.tmdb.org/t/p/w500/{{movie.poster_path}}">
        <button class="delete-button" type="button" ng-click="$ctrl.deleteMovie($index)">X</button>
        </section>
        <details>
            
            <summary>
                {{movie.title}}
            </summary>
    
            <!-- <h3>{{ movie.title }}<button class="delete-button" type="button" ng-click="$ctrl.deleteMovie($index)">X</button></h3> -->
            <p id="overview">{{ movie.overview }} <a href="#!/movieDetails" ng-click="$ctrl.setCurrentMovie(movie);">more...</a> </p>
        </details> 
    </section>
</section>
    `,
    controller: ["WatchListService", "MovieDetailsService", function(WatchListService, MovieDetailsService){
        const vm = this;
        vm.deleteMovie = (index) => {
            WatchListService.deleteMovie(index);
        }

        vm.movieList = WatchListService.getWatchlist();
        console.log(vm.movieList);

        vm.setCurrentMovie = (movie) => {
            MovieDetailsService.setCurrentMovie(movie);
            console.log(movie);
        }
        
    }]
}

angular
    .module("app")
    .component("watchList", watchList);