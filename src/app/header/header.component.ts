import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // @Input()
  // uname:string | undefined ;
  a:any;
  fName:any;
  lName:any;
  email:any;

  
  

  constructor(private dialog: MatDialog,private router:Router, private serv: SampleserviceService){}

  ngOnInit() {
    this.email=localStorage.getItem('email')
    this.a=this.email.split('.').join(' ').split('@',1).join(' ')
    this.fName=((this.a.split(' ',1))[0])[0]
    this.lName=((this.a.split(' ',2))[1])[0]
  }

  Order(){
      const dialogRef =this.dialog.open(StepperComponent);
      dialogRef.afterClosed().subscribe(t=>{
        
      })
    }


    card(){
     
  }
 
  logout(){
    this.router.navigate(['']); 
    
    localStorage.clear();
  }   


 onSearch(value:any){
  this.serv.searchItem(value);

 }

 

  // logout() {
  //      localStorage.setItem('LogOutSuccessful','false');
       
  //    this.router.navigate([''])
  // }



  // constructor(private dialog:MatDialog){}

 
  // openDialog(){
  //  const dialogRef = this.dialog.open(OrderDetailsComponent);

  //  dialogRef.afterClosed().subscribe(result =>{
  //   console.log('Dialog result:${result}')
  //  })
  
  // constructor(private service:SampleserviceService){}

  // dataSource:Observable<any>= of([{}])
  
  // ngOnInit():void{
  //   this.dataSource =this.service.getshopping();
  // }
  
  // // editRow(){
  //   this.service.createOrder({
      
  //      id:15, 
  //     iname:"Mug",
  //     sno:4,
  //     cost:40,
  //     address:"Agra",
  //     edelivery:"5 Dec",
      
    
  //   },
   
 
  //   ).subscribe((d: any) =>{
  //     console.log('======' ,d)
  //   })
  
  // }

  

  
}

