import { Injectable } from '@angular/core';
import { Checklist } from '../interfaces/checklists';
import { ChecklistItem } from '../interfaces/checklists';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ChecklistDataService {
  public checklists: Checklist[] = [];
  public loaded: boolean = false;

  constructor(private storage: Storage) {
  }
  save(): void {
      this.storage.set('checklists', this.checklists);
    }
  load(): Promise<boolean> {
    return new Promise((resolve) => {
        this.storage.get('checklists').then((checklists) => {
              if(checklists != null){
                  this.checklists = checklists;
                }
                this.loaded = true;
                resolve(true);
              });
            });
   }
  createChecklist(data): void {
      this.checklists.push({
      id: this.generateSlug(data.name),
      title: data.name,
      items: [],
      remainCount:0
      });
      this.save();
  }
  removeChecklist(checklist): void {
    let index = this.checklists.indexOf(checklist);
    if(index > -1){
        this.checklists.splice(index, 1);
        this.save();
      }
  }
  renameChecklist(checklist, data): void {
    let index = this.checklists.indexOf(checklist);
    if(index > -1){
    this.checklists[index].title = data.name;
    this.save();
    }
    }
  getChecklist(id): Checklist {
    return this.checklists.find(checklist => checklist.id ===
    id);
    }
  addItem(checklistId, data): void {
    this.getChecklist(checklistId).items.push({
          title: data.name,
          checked: false,
          rank:null
        });
    // this.getChecklist(checklistId).uncheckedItems.push({
    //           title: data.name,
    //           checked: false
    //         });
        this.save();
      }
  removeItem(checklist, item): void {
      let index = checklist.items.indexOf(item);

      if(index > -1){
      checklist.items.splice(index, 1);
    };
      // if(item.checked=false){
      //   checklist.remainCount--;
      //   }

      this.save();
      }
  renameItem(item, data): void {
      item.title = data.name;
      this.save();
      }

    checkItem(checklist,item): void {
        item.checked = !item.checked;

        this.save();
        }

    rankItem(item,rank){
      item.rank=rank;

      this.save();
    }

    countRemain(checklist,count){
      checklist.remainCount=count;
      this.save();
    }

  generateSlug(title): string {
  // NOTE: This is a simplistic slug generator and will not handle things like special characters.
  let slug = title.toLowerCase().replace(/\s+/g, '-');
  // Check if the slug already exists
  let exists = this.checklists.filter((checklist) => {
    return checklist.id.substring(0, slug.length) === slug;
    });// If the title is already being used, add a number to make the slug unique
  if(exists.length > 0){
  slug = slug + exists.length.toString();
  }
  return slug;
  }

}
