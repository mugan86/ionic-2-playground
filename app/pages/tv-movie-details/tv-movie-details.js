import {Page, Platform, NavController, NavParams} from 'ionic/ionic';
import {TheMovieDBAPIService} from '../services/TheMovieDBAPIService';


@Page({
  templateUrl: 'build/pages/tv-movie-details/tv-movie-details.html',
  providers: [TheMovieDBAPIService]
})
export class SelectTVMovieDetailsPage {

  constructor(nav: NavController, navParams: NavParams, movieService:TheMovieDBAPIService, platform: Platform) {
	this.platform = platform;
  	this.movieService = movieService;
    this.nav = nav;
    this.details = [];
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    console.log("choose: " + this.selectedItem.id);

    this.movieService.getMovieMoreInfo(this.selectedItem.id).subscribe(
          data => {this.details = data; console.log(this.details.number_of_episodes);},
          err => this.logError(err),
          () => console.log('Loading 2010 finish');
        );
  }

  goToHomepage(url) {
     console.log(url);
		//cordova.InAppBrowser.open(url, "_system", "location=true");
		window.open(url, '_system', 'location=true');
  }
}
