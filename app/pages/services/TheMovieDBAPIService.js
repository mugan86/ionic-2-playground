import { Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

export class TheMovieDBAPIService {

    constructor(@Inject(Http) http: Http) {
        this.http = http
    }

    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url).map(res => res.json());
    }

    searchTvShowsByYear(year) {
        console.log("Select year: " + year);
        return this.http.get("release_tv_shows_2010_1.json").map(res => res.json());
    }
}
