import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SampleserviceService } from './sampleservice.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    let a=localStorage.getItem('LoginSuccessful')?? ''
    return JSON.parse(a)

  }
  
    


  }
  

