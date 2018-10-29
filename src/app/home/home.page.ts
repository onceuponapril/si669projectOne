import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ChecklistDataService } from '../services/checklist-data.service';
// import { NavController } from '@ionic/angular';
import { Observable, Observer } from 'rxjs';
@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private list:string;
  listUpdate: any;
  listObserver: any;
  private checklists:any;
  private count: any;
  constructor(private alertCtrl: AlertController,public dataService: ChecklistDataService) {

    this.listUpdate = Observable.create(observer => {
       this.listObserver = observer;
 });

    this.listUpdate.subscribe((checklists) => {
        this.checklists=this.dataService.checklists;
     });
    //
}
  //   ngOnInit(){
  //       this.storage.get('introShown').then((result) => {
  //       if(result == null){
  //         this.storage.set('introShown', true);
  //       this.navCtrl.navigateRoot('/index');
  //   }
  // });
// }
    byAsc(){
      this.checklists=this.dataService.checklists;
      this.checklists.sort(function(a,b){
        let aLen= a.items.filter(item =>!item.checked).length;
        let bLen=b.items.filter(item =>!item.checked).length

        if (aLen< bLen){
        return -1;
        }
        return 1;
      });

    }

    byDsc(){
      this.checklists=this.dataService.checklists;
      this.checklists.sort(function(a,b){
        let aLen= a.items.filter(item =>!item.checked).length;
        let bLen=b.items.filter(item =>!item.checked).length

        if (aLen> bLen){
        return -1;
        }
        return 1;
      });
    }
  remainCount(checklist){
    var count=checklist.items.filter(item =>!item.checked).length;
    return count;
  }
  addChecklist(): void {
      let data= {"name":this.list};

      this.dataService.createChecklist(data);
    }

    renameChecklist(checklist): void {
      this.alertCtrl.create({
          header: 'Rename Checklist',
          message: 'Enter the new name of this checklist below:',
          inputs: [
           {
           type: 'text',
           name: 'name'
           }
           ],
           buttons: [
           {
           text: 'Cancel'
           },
           {
           text: 'Save',
           handler: (data) => {
             this.dataService.renameChecklist(checklist, data);
           }
         }]}).then((prompt) => {
              prompt.present();
            });
          }

      removeChecklist(checklist): void{
        this.dataService.removeChecklist(checklist);
      }
}
