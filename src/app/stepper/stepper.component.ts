import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SampleserviceService } from '../sampleservice.service';
import { Country, State, City } from 'country-state-city';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit,OnDestroy {

  destroyedvalue$ = new Subject<boolean>();

  formdata: any
  showit = true
  firstFormGroup = this._formBuilder.group({
    sno:['', Validators.required],
    iname: ['', Validators.required],
    cost: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    edelivery: ['', Validators.required],
  });
  isEditable = false;


  thirdFormGroup: any
  country = new FormControl(null, Validators.required)
  state = new FormControl(null, Validators.required)
  countries: any
  states: any

  constructor(private _formBuilder: FormBuilder, private serv: SampleserviceService) { }


  ngOnInit(): void {

    this.countries = Country.getAllCountries()
    this.thirdFormGroup = new FormGroup({
      country: this.country,
      state: this.state
    })

    this.country.valueChanges.pipe(takeUntil(this.destroyedvalue$)).subscribe((details: any) => {
      this.states = State.getStatesOfCountry(details.isoCode)
     

    })
  }
form1(){
  (this.firstFormGroup.value);
}
form2(){
  (this.secondFormGroup.value);
}
form3(){
  (this.thirdFormGroup.value);
  this.serv.createOrder({...this.firstFormGroup.value,...this.secondFormGroup.value,...this.thirdFormGroup.value,id:this.firstFormGroup.value['sno']}).pipe(takeUntil(this.destroyedvalue$)).subscribe()
  


   
    }
  
    ngOnDestroy() {
      this.destroyedvalue$.next(true);
      this.destroyedvalue$.complete();
      }

  }
