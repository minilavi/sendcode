import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'Abhi' , age:20, email:'abhi@test.com'},
      {name:'Abhinav' , age:21, email:'abhinav@test.com'},
      {name:'Abhina' , age:22, email:'abhina@test.com'}
    ]
  }
}
