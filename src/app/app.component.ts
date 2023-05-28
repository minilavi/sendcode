import { Component } from '@angular/core';
import { FormControl,FormGroup , Validators } from '@angular/forms';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'Angular Pipe';
  
  // GET TEXT BOX VALUE
  // displayVal='';
  // getValue(val:string)
  // {
  //   console.warn(val)
  //   this.displayVal=val
  // }
  
  // MAKE COUNTER
//  count=0 
//  counter(type:string)
//  {
//     type==='add' ?this.count++:this.count--
    
//  }
//  HOW TO START WITH STYLE
// Property binding
// name ="Monika"
// disable=false;

//  IF ELSE
    // show="yes"
    
    // Multiple if else
    // color="yellow";

    // SWITCH CASE
    // 
    
    // LOOP IN ANGULAR
    // users=['Monika','Mini','Aditya'];
    // userDetails = [
    //   {name:'Monika' , email:'monika@gmail.com' , phn:'123'},
    //   {name:'Mini' , email:'mini@gmail.com' , phn:'456'},
    //   {name:'Aditya' , email:'aditya@gmail.com' , phn:'789'}
    // ];

    // NESTED LOOP
    
    // users = [
    //     {name:'Monika' , email:'monika@gmail.com' , socialAccounts:['whatsapp','insta']},
    //     {name:'Mini' , email:'mini@gmail.com' , socialAccounts:['linkedin','fb']},
    //     {name:'Aditya' , email:'aditya@gmail.com' , socialAccounts:['snap','naukri']}
    //    ];

      // STYLE BINDING
      // color="blue";
      // bgColor="green";
      // updateColor(){
      //   this.color="red"
      //   this.bgColor="skyblue"
      // }

      // BASIC ANGULAR FORM
  //     userData:any={};
  // getdata(data:NgForm )
  // {
  //   console.warn(data)
  //   this.userData=data
  // }

  // TOGGLE
  // display=true
  // toggle()
  //   {
  //     this.display=!this.display;
  //   }

  // ADD BOOTSTRAP

  // MAKE TODO LIST 
  // list:any[] =[];
  // addTask(item:string)
  // {
    
  //   this.list.push({id:this.list.length,name:item});
  //   console.warn(this.list)
    
  // }
  // removeTask(id:number)
  // {
  //   console.warn(id)
  //   this.list=this.list.filter(item=>item.id!==id)
  // }

  // SEND DATA PARENT TO CHILD COMPONENT
  // data=10;
  // updateChild()
  // {
  //   this.data= Math.floor(Math.random()*10)
  // }
  // REUSABLE COMPONENT
//   userDetails=[
  
//     {name: 'Monika' , email:'mon@gmail.com'},
//     {name: 'Moni' , email:'on@gmail.com'},
//     {name: 'Mini' , email:'mo@gmail.com'},
//     {name: 'Mona' , email:'mn@gmail.com'},
//     {name: 'Minky' , email:'om@gmail.com'},
  
// ]

// SEND DATA CHILD TO PARENT COMPONENT
// data="x";
// updateData(item:string)
// {
//   console.warn(item)
//   this.data=item;
// }


// TWO WAY BINDING
// name:any;

// TEMPLATE REFERENCE VARIABLE
// getVal(item:any)
// {
//   console.warn(item)
// }

// PIPES
  // today= Date();
  // user = {
  //   name: "Monika",
  //   age:"25"
  // }
 
  // TEMPLATE DRIVEN FORM
  // userLogin(item:any)
  // {
  //   console.warn(item);
  // }
  
  // REACTIVE FORM AND VALISDATION
  // FORM CTRL KREGA
  // loginForm= new FormGroup({
  // // field ctrl KREGA INPUT FIELD CONTROLLER
  // user:new FormControl('mini'),         
  // email:new FormControl('text@123'),
  // password:new FormControl('123')

  // })
  // loginUser()
  // {
  //   console.warn(this.loginForm.value);
  // }

  // REACTIVE FORM  VALISDATION
  loginForm= new FormGroup({
    // field ctrl KREGA INPUT FIELD CONTROLLER
    user:new FormControl('',[Validators.required]),
    user1:new FormControl('',[Validators.required]),         
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  
    })
    loginUser()
    {
      console.warn(this.loginForm.value);
    }
  get user()
  {
    return this.loginForm.get('user')
  }
  get user1()
  {
    return this.loginForm.get('user1')
  }

  get email()
  {
    return this.loginForm.get('email')
  }
  get password()
  {
    return this.loginForm.get('password')
  }

  // SERVICES
  // memberData=[
  //   {name:'Monika',email:'monika@test.com'},
  //   {name:'Moni',email:'moni@test.com'},
  //   {name:'Mini',email:'mini@test.com'},
  //   {name:'Mona',email:'mona@test.com'}
  // ]

  // MAKE SERVICES
  // users:any;
  // constructor(private userdata:UserdataService)
  // {
  //   console.warn("userdata",userdata.users())
  //   this.users=userdata.users();
  // }
  

}


