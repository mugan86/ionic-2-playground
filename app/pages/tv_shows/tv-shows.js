import {Page, NavController} from 'ionic/ionic';
import {TheMovieDBAPIService} from '../services/TheMovieDBAPIService';
import {SelectTVMovieDetailsPage} from '../tv-movie-details/tv-movie-details';

@Page({
  templateUrl: 'build/pages/tv_shows/tv-shows.html',
  providers: [TheMovieDBAPIService]
})

export class TvShowListPage {
    constructor(nav: NavController, movieService:TheMovieDBAPIService) {
        this.nav = nav;
        this.movieService = movieService;

        this.title = "TV shows start in 2010";

        console.log(this.title);

        this.images = [
                        'advance-card-bttf',
                        'advance-card-map-madison',
                        'advance-card-map-mario',
                        'avatar-amber',
                        'avatar-ben',
                        'avatar-cher',
                        'avatar-dionne',
                        'avatar-han',
                        'marty-avatar',
                        'avatar-travis',
                        'avatar-tai'
                        ];

        //Call API to show race list in current year
        this.loadTVShows();
        this.avatars = this.randomValues();
        console.log(this.tv_shows);
    }


    loadTVShows()
    {
      

        this.movieService.searchTvShowsByYear("2010").subscribe(
          data => {console.log(this.tv_shows = data[0].results)},
          err => this.logError(err),
          () => console.log('Loading 2010 finish');
        );
    }

    randomValues ()
    {
        arr = []

        while(arr.length < 20){
          var randomnumber=Math.ceil(Math.random()*(this.images.length - 1));
          arr.push(randomnumber);
        }
        console.log(arr);
        return arr;
    }

    itemTapped(event, item) {
        console.log("Click");
        this.nav.push(SelectTVMovieDetailsPage, {
       item: item
     });
  }
}
