"use strict";

const searchCriteria = {
    template: `
    
    `,
    controller: ["MovieService", "WatchListService", function(MovieService, WatchListService){
        const vm = this;
        
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);