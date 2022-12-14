import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  // @Input()
  // uname:string | undefined ;
  destroyed$ = new Subject<boolean>();

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

  addOrder(){
      const dialogRef =this.dialog.open(StepperComponent);
      dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe()
    }



  logout(){
    this.router.navigate(['']); 
    
    localStorage.clear();
  }   


 onSearch(value:any){
  this.serv.searchItem(value);

 }

 ngOnDestroy() {
  this.destroyed$.next(true);
  this.destroyed$.complete();
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
  


  

  
}

