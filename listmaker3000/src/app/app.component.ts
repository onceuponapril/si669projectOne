import { Component } from '@angular/core';
import { ChecklistDataService } from './services/checklist-data.service';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private dataService: ChecklistDataService
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
  this.dataService.load();
  SplashScreen.hide().catch((err) => {
      console.warn(err);
    });
  StatusBar.hide().catch((err) => {
      console.warn(err);
    });
    // this.initializeApp();
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
}
