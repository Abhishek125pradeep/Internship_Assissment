import { Component } from '@angular/core';
import { MaterialModule } from '../../Module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { error } from 'console';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [MaterialModule,CommonModule,FormsModule],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent {
   
  empForm:FormGroup
  selectedValue: string = '';
   education:string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
   ]
   
  constructor(private fb:FormBuilder, private empService: EmployeeService,private dialogRef: MatDialogRef<EmpAddEditComponent>  ){
    this.empForm = this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experiance:'',
      package:''
    })
     

  }
  

  onFormSubmit(){
  
    if(this.empForm.valid){
     this.empService.addEmployee(this.empForm.value).subscribe({
     
   next : (val :any) =>{
   console.log(val);
   alert('Employee Added Successfully ')
   this.dialogRef.close()
   },

   error: (err)=>{
    console.error(err);
    
   },

     })

     
    }


  }


  onValueChange(event:string){
  console.log("Selected Value", event);
  
  }
  onValueChanges(event:string){
    console.log("Selected Value", event);
    
    }
}
