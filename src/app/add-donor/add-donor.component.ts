import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  selectFormControlHb = new FormControl('', Validators.required);
  selectFormControlName = new FormControl('', Validators.required);
  selectFormControlDate = new FormControl('', Validators.required);
  selectFormControlGender = new FormControl('', Validators.required);
  selectFormControlAge = new FormControl('', Validators.required);
  selectFormControlBlood = new FormControl('', Validators.required);
  selectFormControlSerial = new FormControl('', Validators.required);
  selectFormControlLo = new FormControl('', Validators.required);
  selectFormControlPhone = new FormControl('', Validators.required);
  selectFormControlExp = new FormControl('', Validators.required);
  selectFormControlPatient = new FormControl('', Validators.requiredTrue);

  formVar!: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formVar = this.fb.group({
      date: '',
      name: '',
      hb: '',
      gender: '',
      age: '',
      bloodGroup: '',
      serial: '',
      location: '',
      phone: '',
      patient: '',
      expiry: ''
    });
  }

  onSubmit(){
    // this.http.post('url', this.formVar)
    // .subscribe((res)=>{
    //   console.log("res", res)
    // })
    console.log(this.formVar.value)
  }

}
