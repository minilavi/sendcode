import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusecom',
  templateUrl: './reusecom.component.html',
  styleUrls: ['./reusecom.component.css']
})
export class ReusecomComponent {
  constructor() { }
    @Input() item:{name:string,email:string} = {name:'',email:''};
  

}
