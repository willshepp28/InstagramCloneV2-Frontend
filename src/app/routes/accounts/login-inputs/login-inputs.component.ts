import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.router.url);

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formValues() { return this.form.controls; }

  onSubmit() {
    console.log(this.formValues.email.value);
    console.log(this.formValues.password.value);
  }

}
