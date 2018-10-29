import { Component, OnInit } from '@angular/core';
import { ChecklistDataService } from '../services/checklist-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage{
  private list:string;

  constructor(public dataService: ChecklistDataService) {}

  addChecklist(): void {
      let data= {"name":this.list};
      this.dataService.createChecklist(data);}

  ngOnInit() {
  }

}
