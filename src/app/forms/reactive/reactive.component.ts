import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

studentForm: FormGroup = new FormGroup({
  fristName: new FormControl("",[Validators.required, Validators.minLength(4)]),
  lastName: new FormControl(),
  userName: new FormControl("Some@123",[Validators.email]),
  city: new FormControl(),
  state: new FormControl(),
  zipCode: new FormControl(),
  isAcceptTerm: new FormControl()
})

formValue: any

onSave(){
  this.formValue = this.studentForm.value;
}
}
