import {Page, NavController} from 'ionic/ionic';
import {RaceService} from '../services/RaceService';
import {SelectRaceDetailsPage} from '../race-details/race-details';

@Page({
  templateUrl: 'build/pages/race-list/race-list.html',
  providers: [RaceService]
})

export class RaceListPage {
    constructor(nav: NavController, raceService:RaceService) {
        this.nav = nav;
        this.raceService = raceService;

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
        this.loadRaceList();
        this.avatars = this.randomValues();
    }


    loadRaceList()
    {
        //Get F1 current year races
        this.raceService.searchRacesCurrentYear().subscribe(
          data => {this.races = data.MRData.RaceTable.Races; console.log(this.races[0]); this.current = this.races[0].season},
          err => this.logError(err),
          () => console.log('Loading finish');
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
