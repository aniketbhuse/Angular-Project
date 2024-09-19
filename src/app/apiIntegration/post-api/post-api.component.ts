import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
deptObj: any = {
  
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  
}
ngOnInit(): void {
  //this.getDepartment();
}
http = inject(HttpClient);

onSave(){
  
  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
    
    if(res.result){
      alert("Department Created Sucess");
      
    }else{
      alert("res.message");
    }
  })
}

DepartmentList: any[] = [];

/*getDepartment(){
  this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.DepartmentList = res.data;
  })
}*/


}
