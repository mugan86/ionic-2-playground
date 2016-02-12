import {Page, NavController} from 'ionic/ionic';
import {RaceService} from '../services/RaceService';

@Page({
  templateUrl: 'build/pages/race-list/race-list.html',
  providers: [RaceService]
})

export class RaceListPage {
  constructor(nav: NavController, raceService:RaceService) {
    this.nav = nav;
    this.raceService = raceService;

    //Call API to show race list in current year
    this.loadRaceList();
    this.randomValues();

    this.images = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  }


  loadRaceList()
  {
    //Get F1 current year races
    this.raceService.searchRacesCurrentYear().subscribe(
      data => {this.races = data.MRData.RaceTable.Races; console.log(this.races[0].season); this.current = this.races[0].season},
      err => this.logError(err),
      () => console.log('Loading finish');
    );
  }

  randomValues ()
  {
    var arr = []

    while(arr.length < 20){
      var randomnumber=Math.ceil(Math.random()*20);
      arr.push(randomnumber);
    }
    console.log(arr);
    return arr;
  }


}
