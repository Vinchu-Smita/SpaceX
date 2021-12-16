import { Component, OnInit,  Input } from '@angular/core';

const data = [
  { id: 0, name: "This week" },
  { id: 0, name: "This month" },
  { id: 0, name: "Last 30 days" },
  { id: 0, name: "All time" }
];

const data2 = [
  { id: 0, name: "View details" },
  { id: 0, name: "View submissions" },
  { id: 0, name: "View in browser" },
  { id: 0, name: "Create translation" }
];
@Component({
  selector: 'app-dropdowndata',
  templateUrl: './dropdowndata.component.html',
  styleUrls: ['./dropdowndata.component.scss']
})
export class DropdowndataComponent implements OnInit {
  public active = false;

  @Input() title = "";
  @Input() input = "";
  public data:any = [];
  constructor() { }

  ngOnInit(): void {
    if (Number(this.input) === 0) this.data = data;
    if (Number(this.input) === 1) this.data = data2;
  }

  toggle() {
    this.active = !this.active;
  }

  clicked(input: number) {
    // console.log(input);
    this.title = this.data[input].name;
    this.active = false;
  }
}
