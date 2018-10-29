import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChecklistDataService } from '../services/checklist-data.service';
// import { ListitemService } from '../services/listitem.service';
import { Checklist } from '../interfaces/checklists';
import { ChecklistItem } from '../interfaces/checklists';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.page.html',
  styleUrls: ['./checklists.page.scss'],
})
export class ChecklistsPage {
  // implements OnInit
  private slug: string;
  private item: string;
  public checklist: Checklist;
  private itemUpdate: any;
  public showhide: boolean=false;
  private count:any;

  constructor(private alertCtrl: AlertController, private route:ActivatedRoute, public dataService: ChecklistDataService) {

  this.itemUpdate = Observable.create(observer => {
     this.itemUpdate = observer;
   });
  this.itemUpdate.subscribe((checklist) => {
    this.checklist = checklist;
    });
}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('id');

    this.loadChecklist();
  }
  loadChecklist(){
    if(this.dataService.loaded){
      this.checklist = this.dataService.getChecklist(this.slug);
    } else {
    this.dataService.load().then(() => {
      this.checklist =this.dataService.getChecklist(this.slug);
    });
    }
    }

    addItem(): void {
      let item={'name':this.item};
      this.dataService.addItem(this.checklist.id, item);
    }

      removeItem(item): void {
            this.dataService.removeItem(this.checklist, item);
      }
      renameItem(item): void {
            this.alertCtrl.create({
                header: 'Rename Item',
                message: 'Enter the new name of the task for this checklist below:',
                inputs: [
                {
                type: 'text',
                name: 'name'
                }
                ],
                buttons: [
                {text: 'Cancel'
                },
                {
                text: 'Save',
                handler: (data) => {
                this.dataService.renameItem(item, data);
                }
                }
                ]
                }).then((prompt) => {
                prompt.present();
                });
                }

    checkItem(item): void {
            this.dataService.checkItem(this.checklist,item);
            }

    setRank(item,rank){
            console.log(rank);
            this.dataService.rankItem(item,rank);
            }

    remainCount(){
      var count=this.checklist.items.filter(item =>!item.checked).length;
      return count;
    }
    byPriority(){
      this.checklist.items.sort(function(a,b){
        if (a.rank< b.rank){
        return -1;
        }
        return 1;
      });
    }

    byAlpha(){
        this.checklist.items.sort(function(a,b){
          if (a.title< b.title){
            return -1;
            }else {
              return 1;
            }

        }
      );
      }
}

    // console.log(this.checklist);

      // this.dataService.addItem(this.checklist.id, item);

//     removeItem(item): void {
//       this.dataService.removeItem(this.checklist, item);
//   }
//     renameItem(item): void {
//       this.dataService.renameItem(item, data);
//
// }
