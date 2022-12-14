import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import{cards} from '../model';
import { Observable, of } from 'rxjs';

import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css']
})
export class MatCardComponent implements OnInit ,OnDestroy{
  cards: Observable<cards[]> =of([]);
  onDestroyed$= new Subject<boolean>()



  constructor(private serv: SampleserviceService, private router: Router) {

  }



  ngOnInit(): void {


   
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).pipe(takeUntil(this.onDestroyed$)).subscribe((path: any) => {
     
      if (path.url.includes('clothing')) {

        this.cards = this.serv.getclothing()

      }

      else if (path.url.includes('homeAppliances')) {
        this.cards = this.serv.gethomeAppliance()

      }
      else if (path.url.includes('electronicAppliances')) {
        this.cards = this.serv.getelectronicAppliance()

      }
      else {
        path.navigate(['/goshopping'])
      }

    })


  }

ngOnDestroy(): void {
this.onDestroyed$.next(true)
this.onDestroyed$.complete()
}





}

