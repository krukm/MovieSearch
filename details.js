"use strict";


const detailo = {

    template: `

    <style>
    #featured {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }
    figure {
        width: 200px;
        position: relative;
    }

    figcaption {
        position: absolute;
        top: 0;
        height: 300px;
        text-overflow: ellipsis;
        color: white;

    }

    div.pics {
        height: 300px;
        width: 200px;
        background-size: cover !important;
        background-position: center !important;
    }
    
    </style>

    <section id="featured">
        <figure>
        <div class="pics" style="background:url('https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')">
        </div>
        <figcaption>
        As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
        </figcaption>
        </figure>
        <figure>
        <div class="pics" style="background:url('https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')">
        </div>
        <figcaption>
        As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
        </figcaption>
        </figure>
        <figure>
        <div class="pics" style="background:url('https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')">
        </div>
        <figcaption>
        As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
        </figcaption>
        </figure>
        <figure>
        <div class="pics" style="background:url('https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')">
        </div>
        <figcaption>
        As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
        </figcaption>
        </figure>
        <figure>
        <div class="pics" style="background:url('https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg')">
        </div>
        <figcaption>
        As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
        </figcaption>
        </figure>

    </section>
    
    `,
    controller: function(){

    }
}




angular.module("app")
    .component("detailo", detailo)