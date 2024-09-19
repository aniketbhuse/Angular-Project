import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //string, boolean, date, number
  
 // Variable declartion in Angular
  courseName: string ="Angular js-18";
  inputType = "checkBox";
  stateName: string = "Maharashtra";
  myClassName: string = "text-primary";
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();
  cityArray: string [] =['Pune','Mumbai','Sangola','Solapur'];


  constructor(){

  }
  changeCourseName(){
    this.courseName= "React Js";
  }
  showAlert(message: string){
    alert(message)
  }

}
