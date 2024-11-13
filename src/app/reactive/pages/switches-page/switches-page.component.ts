import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    gender:['M', Validators.required],
    wanNotification: [true, Validators.required],
    termnAndConditions: [false, Validators.required]
  });

  public person = {
    gender: 'F',
    wanNotification: 'false',
  }

constructor( private fb: FormBuilder ){}
  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

isValidField( field: string ): boolean | null {
  return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
}

onSave(){
  if(this.myForm.invalid) {
    this.myForm.markAsTouched()
    return;
  }
  console.log(this.myForm.value)

}
}
