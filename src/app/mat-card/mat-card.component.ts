import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cards } from '../model';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css']
})
export class MatCardComponent implements OnInit{
 product: Observable<cards[]> = of([])

  constructor(private serv:SampleserviceService){}

  
  
  ngOnInit(): void {
  this.product = this.serv.getProductDetails()
 
  }


}
