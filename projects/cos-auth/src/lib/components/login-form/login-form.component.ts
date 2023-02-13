import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CosLoginFormService } from './login-form.service';

@Component({
  selector: 'cos-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class CosLoginFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginFormService: CosLoginFormService,
  ) {
    this.form = formBuilder.group({});
  }

  handleForm(event: FormGroup): void {
    this.form = event;
  }

  onFormSubmit(event: FormGroup): void {
    if (this.form.valid) {
      this.loginFormService.login(event.value);
    } else {
      if (this.form.controls['email'].errors) {
        this.loginFormService.showNotifications('E-mail field', this.form.controls['email'].errors);
      } else if (this.form.controls['password'].errors) {
        this.loginFormService.showNotifications('Password field', this.form.controls['password'].errors);
      }
    }
  }
}
