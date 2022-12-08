import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service'
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  iname: string;
  sno: number;
  cost: number;
  address: string;
  edelivery: string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
 
   


  // username:string="Simran";

  displayedColumns = [
    'sno',
    'iname',
    'cost',
    'address',
    'edelivery',
    'dot',
    'stars'
  ];
 




  constructor(private service: SampleserviceService, private router: Router, private dialog: MatDialog,private route: ActivatedRoute) { }
  dataSource: Observable<any> = of([{}])
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
     this.service.getshopping()
     this.dataSource=this.service.dataEvent$

  
  }

  // edit(id:any) {
  //   this.service.createOrder({}).subscribe(f => { console.log('---', f) });
  //   this.dialog.open(OrderDetailsComponent)
  // }
 
    
  deleteRow(id: any) {
    this.service.deleteOrder(id).subscribe();

  }
  editRow(source:any) {
    const dialogRef = this.dialog.open(OrderDetailsComponent,{
      data:{
        ...source,showit:true,
      }

      })
        
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log(`Dialog result:${result}`);
   

  }
  allRow(id:any){
      this.router.navigate(['card/',id])
    }


    star(data: any) {
      
      this.service.updateFavorites(data).subscribe()
       

        window.location.reload();
      }

     
  // logout() {
  //      localStorage.setItem('LogOutSuccessful','false');
  //    this.router.navigate([''])
  // }
//  logout(){
//     this.router.navigate(['']); 
//     localStorage.clear();
//   }
    }


