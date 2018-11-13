import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './list.component.html',
  //styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit {
  name = 'Angular 5';

  taskTypeAreas: {
    name: string;
    selected: boolean;
  }[] = [
    {
      name: 'Area 1',
      selected: false
    },
    {
      name: 'Area 2',
      selected: false
    },
    {
      name: 'Area 3',
      selected: true
    },
  ];
  selectedOptions: string[];

  ngOnInit(){
    // determine initial selected options to display
    this.selectedOptions = this.taskTypeAreas
      //.filter(item => item.selected)
      .map(item => item.name);
  }

  onAreaListControlChanged(list){
    // determine selected options
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);
  }
}
