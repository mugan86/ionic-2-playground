import { Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

export class RaceService {

    constructor(@Inject(Http) http: Http) {
        this.http = http
    }

    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url).map(res => res.json());
    }

    searchRacesCurrentYear()
    {
        var url = 'http://ergast.com/api/f1/current.json';
        console.log("Result : " + this.http.get(url).map(res => res.json()));
        return this.http.get(url).map(res => res.json());
    }
}
