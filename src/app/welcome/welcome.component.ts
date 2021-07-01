import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  hide = true;

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  selectFormControlEmail = new FormControl('', Validators.required);

  userEmails = new FormGroup({primaryEmail: new FormControl('',[
              Validators.required,
              Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
            });

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.dialog.open(SignInComponent);
  }



}
