export interface Checklist {
id: string;
title: string;
items: ChecklistItem[];
remainCount: any;
}
export interface ChecklistItem {
// id:string;
title: string;
checked: boolean;
rank:any;
}
// export interface uncheckedItems{
//   title: string;
//   checked: boolean;
// }
