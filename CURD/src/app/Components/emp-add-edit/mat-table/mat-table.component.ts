import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../Module';
import { EmployeeService } from '../../../services/employee.service';



export interface  Employee {
  firstName: string;
  lastName: string;
  email: string;
  education: string;
  company: string;
  experiance: string;
  package: string;
}
  



@Component({
  selector: 'app-mat-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.css'
})
export class MatTableComponent {
   EMPLOYEE_DATA: Employee[] = [];
  constructor(private employeeservice:EmployeeService){
    this.employeeservice.getAllEmployee().subscribe({
      next: (res :any)=>{
      this.EMPLOYEE_DATA = res;
      this.dataSource.data = this.EMPLOYEE_DATA;
      
      },
      error: (err:any)=>{

      }
    })
  }
  
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'education', 'company', 'experiance', 'package'];
  dataSource = new MatTableDataSource(this.EMPLOYEE_DATA);

}
