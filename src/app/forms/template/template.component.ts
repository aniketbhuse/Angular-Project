import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any = {
    fristName: '',
    lastName: '',
    userName: '',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerm: false
  }

  fromValue: any;

  onSubmit(){
    debugger;
    this.fromValue = this.studentObj;
  }

  resetFrom(){
    this.studentObj = {
      fristName: '',
    lastName: '',
    userName: '',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerm: false
    }
  }
}
