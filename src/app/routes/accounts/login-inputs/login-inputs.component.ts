import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/store/app.states";
import { LogIn } from 'src/app/core/store/actions/authentication.actions';

@Component({
  selector: 'app-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formValues() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { console.log("invalid"); return; }

    const payload = {
      email: this.formValues.email.value,
      password: this.formValues.password.value
    };

    this.store.dispatch(new LogIn(payload));
  }

}
