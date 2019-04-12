var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

function Search() {
    this.searchSpotify = function(input, cb, connection){
        spotify.search({type: 'playlist', query: input, limit: 50})
        .then(function(response) {
            var index = Math.floor(Math.random() * 50);
            var string = response.playlists.items[index].uri;
            var id = string.split(':').pop();
            console.log( 'https://open.spotify.com/embed/user/spotify/playlist/' + id);
            var url = 'https://open.spotify.com/embed/user/spotify/playlist/' + id;
            cb(url, input, connection);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
}

module.exports = Search;