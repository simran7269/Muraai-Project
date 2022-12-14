import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service'
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { shopping } from '../model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
 
   



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
  dataSource: Observable<shopping[]> = of([{
    sno: '',
    iname: '',
    cost: '',
    address: '',
    edelivery: '',
    id: '',
    fav: false

  }])
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
     this.service.getshopping()
     this.dataSource=this.service.dataEvent$

  
  }


    
  deleteRow(id: any) {
    this.service.deleteOrder(id).subscribe();

  }
  editRow(source:any) {
    const dialogRef = this.dialog.open(OrderDetailsComponent,{
      data:{
        ...source,showit:true,
      }

      })
        
 

  }
  allRow(id:any){
      this.router.navigate(['card/',id])
    }


    star(data: any) {
      
      this.service.updateFavorites(data).subscribe(()=>{

      
       

        window.location.reload();
      });
      }

  
    }


