import { Injectable } from '@angular/core';
import { ChecklistItem } from '../interfaces/checklists';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ListitemService {
  // public checklist:Checklist;

  constructor(private storage: Storage) { }
  // save(): void {
  //     this.storage.set('listitems', this.listitems);
  //   }

// getChecklist(id): Checklist {
//   return this.checklists.find(checklist => checklist.id ===
//   id);
//   }
// addItem(data): void {
//   this.listitems.push({
//         id:data.id,
//         title: data.name,
//         checked: false
//       });
//       this.save();
//     }
// // removeItem(item): void {
// //     let index = this.listitems.indexOf(item);
// //     if(index > -1){
// //     checklist.items.splice(index, 1);
// //     this.save();
// //     }
// //     }
// renameItem(item, data): void {
//     item.title = data.name;
//     this.save();
//     }
}
