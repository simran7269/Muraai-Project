import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SampleserviceService } from '../sampleservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {
  showit=true
  formdata: any;

  constructor(public dialog: MatDialog, private serv: SampleserviceService, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      sno: new FormControl(this.data?.sno??''),
      iname: new FormControl(this.data?.iname??'', Validators.required),
      cost: new FormControl(this.data?.cost??''),
      address: new FormControl(this.data?.address??''),
      edelivery: new FormControl(this.data?.edelivery??''),
    
        
      
    
    });
    
  }

  submit(data: any) {
    this.serv.createOrder({ ...data, id: data['sno'] }).subscribe(d=>{

   
      // window.location.reload();




    this.dialog.closeAll();
     });
  }
  update(value: any){
     this.serv.editDetails(value).subscribe(a =>{
      // window.location.reload();
      
     })

  }
  snackbar(){
    this._snackBar.open('Updated Successfully', 'Thankyou');
  }
  snackbar1(){
    this._snackBar.open('Added Successfully', 'Thankyou');
  }
}