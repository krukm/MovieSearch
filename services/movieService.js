"use strict";
function MovieService($http) {
    const vm = this;
    vm.results = null;
    vm.genreResults = [];

    vm.resetGenreResults = () => {
        vm.genreResults = [];
    }

    vm.searchByGenre = function (searchInput, genre) {
        //search by input only
        console.log('searchInput: ' + searchInput + ' genre: ' + genre);
        if (genre === null) {
            return $http({
                url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
                method: "GET"
            }).then((response) => {
                for (let i = 0; i < response.data.results.length; i++) {
                    vm.genreResults.push(response.data.results[i]);
                }      
                return vm.genreResults;
            });
        //search by genre only
        } else if (searchInput === null) {
            return $http({
                url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&language=en-US&with_genres=${genre}`,
                method: "GET"
            }).then((response) => {
                for (let i = 0; i < response.data.results.length; i++) {
                    vm.genreResults.push(response.data.results[i]);
                }
                console.log('genre only:');
                console.log(vm.genreResults);
                return vm.genreResults;
            });
        //search by input and genre
        } else {
            return $http ({
                url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
                method: "GET"
            }).then((response) => {
                for (let i = 0; i < response.data.results.length; i++) {
                    for(let j = 0; j < response.data.results[i].genre_ids.length; j++){
                        if (response.data.results[i].genre_ids[j].toString() === genre) {
                            vm.genreResults.push(response.data.results[i]);
                        }
                    }
                }
                console.log('both:');
                console.log(vm.genreResults);
                return vm.genreResults;
            });
        }
    }

    vm.popularMovies = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aef5248d110c426d0fbb272768a4ff38`,
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }

    vm.getMore = function(count){
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aef5248d110c426d0fbb272768a4ff38&page=${count}`,
            method: "GET"
        }).then(function(response){
            return response.data;
        })
    };

    vm.genreList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=aef5248d110c426d0fbb272768a4ff38&language=en-US`,
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }
    vm.genreList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=aef5248d110c426d0fbb272768a4ff38&language=en-US`,
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }

    vm.moviesByGenre = function (genreInput) {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&language=en-US&with_genres=${genreInput.id}`,
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }

    // Top rated films 2018 with 30+ votes
    vm.topYearList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&vote_count.gte=30`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //Big Budget Films
    vm.bigBudgetList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&vote_count.gte=30&with_original_language=en`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //Popular Kids films
    vm.kidFilmList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=30&with_genres=10751&with_original_language=en`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //top rated 90's films
    vm.ninetiesList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=2000&release_date.gte=1990&release_date.lte=2000&vote_count.gte=50&vote_average.gte=8&with_original_language=en`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //top rated 80s films
    vm.eightiesList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1980&primary_release_date.lte=1990&release_date.gte=1980&release_date.lte=1990&vote_count.gte=30&vote_average.gte=7.8&with_original_language=en`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //french
    vm.frenchList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=fr`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //Japanese
    vm.japaneseList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=ja`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
    //romantic comedy
    vm.romanticComedyList = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=aef5248d110c426d0fbb272768a4ff38&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=30&with_genres=10749%2C35&without_genres=18%2C14%2C12&with_original_language=en`,
            method: "GET"
        }).then((response) => {
            return response.data.results;
        });
    }
}

angular
    .module("app")
    .service("MovieService", MovieService);
