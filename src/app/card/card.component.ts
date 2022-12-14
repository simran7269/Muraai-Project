import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  // source:any
  idetails: any
  value: any;
  destroyedValues$ = new Subject<boolean>();


  constructor(private route: ActivatedRoute, private service: SampleserviceService, private router: Router, private dialog: MatDialog,) { }
  
  deleteRow(id: any) {
    this.service.deleteOrder(id).pipe(takeUntil(this.destroyedValues$)).subscribe();

  }
  edit(value: any) {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      data: {
        ...this.idetails, showit: true,
      }

    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyedValues$)).subscribe()



  }
  delete(id: any) {

    this.service.deleteOrder(id).pipe(takeUntil(this.destroyedValues$)).subscribe(() => {


      this.router.navigate(["dashboard"]) ;

    });
  }

  ngOnInit() {

    this.service.getDetails(this.route.snapshot.params['id']).pipe(takeUntil(this.destroyedValues$)).subscribe(value => {
      this.idetails = value

    })





  }
  ngOnDestroy() {
    this.destroyedValues$.next(true);
    this.destroyedValues$.complete();
  }
}
