import { JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe,TitleCasePipe,JsonPipe, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  fristName: string = "Welcome to jungle";

  student: any ={
    name: 'Aniket',
    city: 'Pune',
    empID: 1,
    state: 'MH'
  };
}
