import {Page} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
    console.log("Test");
    this.show_menu = true;
  }
}
