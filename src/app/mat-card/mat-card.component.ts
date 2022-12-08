import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css']
})
export class MatCardComponent implements OnInit{
 product:any


  constructor(private serv:SampleserviceService){}
  
  ngOnInit(): void {
  this.serv.getProductDetails().subscribe((data)=>{
    this.product=data
   
  })
 
  }







// // ]
//   }
}
