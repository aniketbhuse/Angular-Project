import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {
 
  isUserLoggedIn: boolean = false;
  loggerUserName: string = "Aniket";

  @ViewChild('dayamicTemplate') dyanTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainser',{read:ViewContainerRef}) dyanContainer: ViewContainerRef | undefined;

  loadTemplate(){
    if(this.dyanTemplate){
      this.dyanContainer?.createEmbeddedView(this.dyanTemplate);
    }


  }
}
