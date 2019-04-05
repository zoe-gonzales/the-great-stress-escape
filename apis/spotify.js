var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

function Search() {
    this.searchSpotify = function(input){
        spotify.search({type: 'playlist', query: input, limit: 10})
        .then(function(response) {
            var index = Math.floor(Math.random() * 10);
            var string = response.playlists.items[index].uri;
            var id = string.split(':').pop();
            console.log( 'https://open.spotify.com/playlist/' + id);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
}

module.exports = Search;