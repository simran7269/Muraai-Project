import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SampleserviceService } from '../sampleservice.service';
import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  formdata: any;
  data: any;

  destroyedData$ = new Subject<boolean>();
  constructor(private router: Router, private _snackBar: MatSnackBar, private serv: SampleserviceService,) { }


  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(this.data?.email ?? ''),
      password: new FormControl(this.data?.password ?? ''),
    });

  }



  home() {
    this.router.navigate(['/dashboard']);
  }
  // openSnackBar() {
  //   this._snackBar.open('Login Successfull', 'Thankyou');
  // }


  login(data: any) {
    this.serv.login(data).pipe(takeUntil(this.destroyedData$)).subscribe(() => {



      localStorage.setItem('LoginSuccessful', 'true');
      localStorage.setItem('email', data.email);
      this.router.navigate(['/dashboard'])
    });

  }

  ngOnDestroy() {
    this.destroyedData$.next(true);
    this.destroyedData$.complete();
  }

}

