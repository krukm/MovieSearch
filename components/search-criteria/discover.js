"use strict";

const discover = {
    template: `
    <style>
    body {
        padding: 10px;
    }
    details label {
        display: block;
    }
    </style>
    <section>
    <h1>Discover</h1>

    <details id="genre">
    <summary>Genre</summary>
    <label>
    <input type="checkbox" value="28">
    Action
    </label>
    <label>
    <input type="checkbox" value="12">
    Adventure
    </label>
    <label>
    <input type="checkbox" value="35">
    Comedy
    </label>
    <label>
    <input type="checkbox" value="18">
    Drama
    </label>
    </details>

    <details id="length">
    <summary>Length</summary>
    <label>
    <input type="checkbox">
    < 1 hour
    </label>
    <label>
    <input type="checkbox">
    > 1 hour
    </label>
    <label>
    <input type="checkbox">
    > 2 hours
    </label>
    <label>
    <input type="checkbox">
    > 3 hours
    </label>
    </details>

    <details id="rating">
    <summary>Rating</summary>
    <label>
    <input type="checkbox" ng-model="$ctrl.discoverInputs.fiveStar">
    ★★★★★
    </label>
    <label>
    <input type="checkbox" ng-model="$ctrl.discoverInputs.fourStar">
    ★★★★
    </label>
    <label>
    <input type="checkbox" ng-model="$ctrl.discoverInputs.threeStar">
    ★★★
    </label>
    <label>
    <input type="checkbox" ng-model="$ctrl.discoverInputs.twoStar">
    ★★
    </label>
    <label>
    <input type="checkbox" ng-model="$ctrl.discoverInputs.oneStar">
    ★
    </label>
    </details>
    

    
    <button ng-click="$ctrl.discover($ctrl.discoverInputs)">Discover</button>
    </section>
    `,
    controller: function() {
        const vm = this;
        vm.discover = function(discoverInputs) {
            
            console.dir(discoverInputs);

        }
    }
}


angular.module("app")
    .component("discover", discover)