import {Page, NavController} from 'ionic/ionic';
import {TheMovieDBAPIService} from '../services/TheMovieDBAPIService';
import {SelectRaceDetailsPage} from '../race-details/race-details';

@Page({
  templateUrl: 'build/pages/race-list/race-list.html',
  providers: [TheMovieDBAPIService]
})

export class TvShowListPage {
    constructor(nav: NavController, raceService:TheMovieDBAPIService) {
        this.nav = nav;
        this.raceService = raceService;

        this.title = "2010";

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
    }


    loadTVShows()
    {
      

        this.raceService.searchTvShowsByYear("2010").subscribe(
          data => {console.log(data[0].results)},
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
        this.nav.push(SelectRaceDetailsPage, {
       item: item
     });
  }
}
