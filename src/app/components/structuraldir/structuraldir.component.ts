import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structuraldir',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './structuraldir.component.html',
  styleUrl: './structuraldir.component.css'
})
export class StructuraldirComponent {

  cityArray: string[] = ['Solapur','Pune','Mumbai','Sangola'];

  dayNumber: string ='';

  studentList: any[] = [
    {stdentid:1,  Name:'Aniket', City:'Pune', isActive: false, TotalMarks:10},
    {stdentid:2, Name:'Raj', City:'Goa',isActive: true, TotalMarks:50},
    {stdentid:3, Name:'Vaibhav', City:'Sangola',isActive: false , TotalMarks:55},
    {stdentid:4, Name:'Jayu', City:'Mumbai',isActive: true, TotalMarks:39},
    {stdentid:4, Name:'Jayu', City:'Mumbai',isActive: true, TotalMarks:78},
    {stdentid:4, Name:'Jayu', City:'Mumbai',isActive: true, TotalMarks:68},
  ]
  CustomerStyle: any = {
    'color' : 'white',
    'background-color':'red',
    'width':'200px',
    'height': '200px',
     'border-radius': '50%'
  }

  div1BgColor: string = 'bg-primary';

  addRedClass(){
  this.div1BgColor ="bg-danger"
  }

  addBlueClass(){
this.div1BgColor = "bg-primary"
  }
}
