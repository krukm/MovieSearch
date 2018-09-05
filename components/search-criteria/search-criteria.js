"use strict";

const searchCriteria = {
    // templateUrl: "components/search-criteria/search-criteria.html",
    template: `
    <header>
    <nav>
        <img id="logo" src="gopher.png">
        <h1>Movie Gopher</h1>
        <form ng-submit="$ctrl.getMovieByGenre($ctrl.searchTerm, selected);">
          <input placeholder="search by movie title" type="search" ng-model="$ctrl.searchTerm" placeholder="movie name">
        </form>
        <h4>filter by:</h4>
        <form>
            <select ng-model="selected">
                <option disabled selected value="">Genre</option>
                <option value="18">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="80">Crime</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="36">History</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mystery</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="10770">TV Movie</option>
                <option value="53">Thriller</option>
                <option value="10752">War</option>
                <option value="37">Western</option>
            </select>
          </form>

          <a href="#!/movieList" id="movielist">Movie List</a>
          <a href="#!/watchList" id="watchlist">Watch List</a>
        
        </nav>
    
</header>
  

  <section id="discoverable">
    <h3>Discover:</h3>
    <ul id="browsingList">
      <li ng-click="$ctrl.getTopYearList();">2018 top films</li>
      <li ng-click="$ctrl.getBigBudgetList();">Big Budget</li>
      <li ng-click="$ctrl.getKidFilmList();">Kid Favorites</li>
      <li ng-click="$ctrl.getNinetiesList();">Nineties Favorites</li>
      <li ng-click="$ctrl.getEightiesList();">Eighties Favorites</li>
      <li ng-click="$ctrl.getFrenchList();">French Films</li>
      <li ng-click="$ctrl.getJapaneseList();">Japanese Anime</li>
      <li ng-click="$ctrl.getRomanticComedyList();">Romantic Comdies</li>
    </ul>
  </section>
  


  <section ng-class="($ctrl.result === null) ? 'empty' : 'movies'">
    <section ng-repeat="result in $ctrl.result">

        <figure>
            <img src="https://image.tmdb.org/t/p/w500/{{result.poster_path}}">
            <i class="material-icons" ng-class="{ clicked: toggle }" ng-click="$ctrl.addToWatchlist(result); toggle = !toggle" >remove_red_eye</i>
        </figure>
      <details>
        <summary>
          {{result.title}}
        </summary>
            <!-- <p>{{ movie.title }}<p>
            <a href="https://www.themoviedb.org/movie/{{movie.id}}">Link</a>
            <div>https://www.themoviedb.org/movie/{{movie.id}}/videos</div> -->
        <a href="https://www.themoviedb.org/movie/{{result.id}}">
        </a>
        <p id="overview">{{ result.overview }} <a href="#!/movieDetails" ng-click="$ctrl.setCurrentMovie(result);">more...</a> </p>
      </details> 
    </section>
  </section>



    `,
    controller: ['SearchService', 'MovieService', 'WatchListService', 'MovieDetailsService',  function(SearchService, MovieService, WatchListService, MovieDetailsService) {
        const vm = this;
        vm.result = null;
        vm.genreList = null;
        vm.searchTerm = SearchService.getSearchTerm();

        vm.addToWatchlist = (movie) => {
            WatchListService.addToWatchlist(movie);
        } 
        
        vm.setCurrentMovie = (movie) => {
            MovieDetailsService.setCurrentMovie(movie);
        }

        vm.getMovieByGenre = (searchTerm, genre) => {
            if (searchTerm === '') {
                searchTerm = null;
            };
            MovieService.resetGenreResults();
            MovieService.searchByGenre(searchTerm, genre).then((response) => {
            SearchService.setSearchTerm(searchTerm);
            vm.result = response;
           });
        }

        vm.getGenreList = () => {
            MovieService.genreList().then((response) => {
                vm.genreList = response.genres;
            });
        };

        if (vm.searchTerm !== null) {
            vm.getMovieByGenre(vm.searchTerm);
        }
        // Search by Specfic filters
        //2018 Top Films
        vm.getTopYearList = () => {
            MovieService.topYearList().then((response) => {
            vm.result = response;
            });
        };
        //Big Budget Films
        vm.getBigBudgetList = () => {
            MovieService.bigBudgetList().then((response) => {
            vm.result = response;
            });
        };
        //Popular Kids films
        vm.getKidFilmList = () => {
            MovieService.kidFilmList().then((response) => {
            vm.result = response;
            });
        };
        //top rated 90's films
        vm.getNinetiesList = () => {
            MovieService.ninetiesList().then((response) => {
            vm.result = response;
            });
        };
        //top rated 80s films
        vm.getEightiesList = () => {
            MovieService.eightiesList().then((response) => {
            vm.result = response;
            });
        };
        //french
        vm.getFrenchList = () => {
            MovieService.frenchList().then((response) => {
            vm.result = response;
            });
        };
        //Japanese
        vm.getJapaneseList = () => {
            MovieService.japaneseList().then((response) => {
            vm.result = response;
            });
        };
        //romantic comedy
        vm.getRomanticComedyList = () => {
            MovieService.romanticComedyList().then((response) => {
            vm.result = response;
            });
        };
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);