import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-inputs',
  templateUrl: './signup-inputs.component.html',
  styleUrls: ['./signup-inputs.component.css']
})
export class SignupInputsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
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

  onSubmit() {
    if (this.form.invalid) { console.log("invalid"); return; }

    this.authenticationService.registerUser({
      email: this.formValues.email.value,
      fullName: this.formValues.fullName.value,
      username: this.formValues.username.value,
      password: this.formValues.password.value
    })
    .subscribe(
    response => {
      console.log(response);
      this.router.navigate(["/accounts/login"]);
    },
    error => {
      console.log(error);
    });
  }

}
