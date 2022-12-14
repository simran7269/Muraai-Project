import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import { shopping } from '../model';
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
  
  ];
  constructor(private service: SampleserviceService) { }
  dataSource: Observable<shopping[]> = of([{
    sno: '',
    iname: '',
    cost: '',
    address: '',
    edelivery: '',
    id: '',
    fav: false
  }])
  

  ngOnInit(): void {
    this.service.getshopping()
    this.dataSource = this.service.dataEvent$.pipe(map((transform:any)=>{
      
      return(transform.filter((selected:any)=>selected.fav))
    }))
}

}
 