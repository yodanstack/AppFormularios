import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validators.service';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorService.firstNameAndLastnamePattern )  ]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern )], [ this.emailValidator]],
    // email: ['', [ Validators.required, Validators.pattern( this.ValidatorService.emailPattern )], [EmailValidatorService]],
    username: ['', [ Validators.required, this.validatorService.cantBeStrdier ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }, {
    Validators:[
      this.validatorService.isFieldOneEquialFieldTwo('password', 'password2')
    ]
  },);


  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  isValidField( field: string ) {
    return this.validatorService.isValidField( this.myForm, field );
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
