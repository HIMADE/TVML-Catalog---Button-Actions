/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.

This version of the stack template uses a banner element to display a large background image at the top of the page with a full description.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-labels-state: show-on-highlight;
    }
    @media -tv-template and (-tv-uber) {
      .darkBackgroundColor {
        background-color: rgb(4, 27, 97);
      }
    }
    </style>
  </head>
  <stackTemplate class="darkBackgroundColor" theme="dark">
    <banner>
      <background>
        <img src="${this.BASEURL}resources/images/iceland/iceland_uber.jpg" width="1920" height="360" />
      </background>
      <description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
    </banner>
    <collectionList>
      <shelf>
        <header>
          <title>Shelf title</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e1.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e2.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e3.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e4.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e5.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e6.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 6</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_520_e7.lcr" width="308" height="308" />
            <title class="showTextOnHighlight">Title 7</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Shelf title</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e1.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e2.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e3.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e4.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e5.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e6.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 6</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_520_e7.lcr" width="250" height="375" />
            <title class="showTextOnHighlight">Title 7</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}