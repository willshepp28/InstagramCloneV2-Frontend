import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from "../../../core/store/app.states";
import { SignUp } from 'src/app/core/store/actions/authentication.actions';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/models/alert/alert';

@Component({
  selector: 'app-signup-inputs',
  templateUrl: './signup-inputs.component.html',
  styleUrls: ['./signup-inputs.component.css']
})
export class SignupInputsComponent implements OnInit {
  form: FormGroup;
  alerts$: any

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  this.form = this.formBuilder.group({
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formValues() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) { console.log("invalid"); return; }

    const payload = {
      email: this.formValues.email.value,
      fullName: this.formValues.fullName.value,
      username: this.formValues.username.value,
      password: this.formValues.password.value
    };

    this.store.dispatch(new SignUp(payload));
  }

}
