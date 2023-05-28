import { Component ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent {
  constructor() {}
  @Output() updateDataEvent= new EventEmitter<string>();

}
