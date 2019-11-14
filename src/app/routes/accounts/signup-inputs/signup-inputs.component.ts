import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-inputs',
  templateUrl: './signup-inputs.component.html',
  styleUrls: ['./signup-inputs.component.css']
})
export class SignupInputsComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
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

  onSubmit(){
    console.log(this.formValues);
  }

}
