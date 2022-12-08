import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  // source:any
  idetails:any
value: any;


  constructor(private route: ActivatedRoute,  private service: SampleserviceService, private router: Router, private dialog: MatDialog,) { }
  deleteRow(id: any) {
    this.service.deleteOrder(id).subscribe();

  }
  edit(value:any) {
    const dialogRef = this.dialog.open(OrderDetailsComponent,{
      data:{
        ...this.idetails,showit:true,
      }

      });
      dialogRef.afterClosed().subscribe()
        
  

  }
  delete(id:any) {
      
    this.service.deleteOrder(id).subscribe()
      {this.router.navigate(["dashboard"])};


  }

  ngOnInit() {
    
    this.service.getDetails(this.route.snapshot.params['id']).subscribe(x=>{
      this.idetails=x
      
    })
    

      
     
  
  }
}
