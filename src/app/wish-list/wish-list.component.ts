import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  displayedColumns = [
    'sno',
    'iname',
    'cost',
    'address',
    'edelivery',
    'dot',
    // 'stars'
  ];
  constructor(private service: SampleserviceService) { }
  dataSource: Observable<any> = of([{}])
  

  ngOnInit(): void {
    this.service.getshopping()
    this.dataSource = this.service.dataEvent$.pipe(map((n:any)=>{
      
      return(n.filter((a:any)=>a.fav))
    }))
}

}
 