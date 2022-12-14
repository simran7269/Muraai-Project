import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

import { Observable, of } from 'rxjs';
import { cards } from '../model';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css']
})
export class MatCardComponent implements OnInit {
  cards: any




  constructor(private serv: SampleserviceService, private router: Router) {

  }



  ngOnInit(): void {
    // this.serv.getclothing().pipe(takeUntil(this.destroyedData$)).subscribe((data)=>{
    //   this.clothing=data

    // })

   
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((path: any) => {
     
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
        this.router.navigate(['/goshopping'])
      }

    })


  }







}

