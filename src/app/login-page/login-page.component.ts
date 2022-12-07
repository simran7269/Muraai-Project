import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SampleserviceService } from '../sampleservice.service';
import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formdata: any;
  data: any;
  constructor(private router: Router, private _snackBar: MatSnackBar, private serv: SampleserviceService,) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(this.data?.email ?? ''),
      password: new FormControl(this.data?.password ?? ''),
    });
    console.log('---', this.data)
  }



  home() {
    this.router.navigate(['/dashboard']);
  }
  // openSnackBar() {
  //   this._snackBar.open('Login Successfull', 'Thankyou');
  // }

  
  login(data: any) {
    this.serv.login(data).subscribe(d => {
      console.log('-----', d)

   
       localStorage.setItem('LoginSuccessful','true');
       localStorage.setItem('email',data.email);
      //  console.log(localStorage.getItem('LoginSuccessful'))
     this.router.navigate(['/dashboard'])
    });
  }

}

