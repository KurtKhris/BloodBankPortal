import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  selectFormControlEmail = new FormControl('', Validators.required);
  selectFormControlPass = new FormControl('', Validators.required);

  userEmails = new FormGroup({primaryEmail: new FormControl('',[
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  formVar!: FormGroup;

   constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formVar = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  }

  onSubmit(){
    this.http.post('url', this.formVar)
    .subscribe((res)=>{
      console.log("res", res)
    })
    console.log(this.formVar.value)
  }

}
