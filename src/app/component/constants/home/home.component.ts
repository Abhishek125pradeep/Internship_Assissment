import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '640px',
      disableClose: true,
    });
  }

}
