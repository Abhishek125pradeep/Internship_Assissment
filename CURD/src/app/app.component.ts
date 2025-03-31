import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './Module';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './Components/emp-add-edit/emp-add-edit.component';
import { CounterAppComponent } from './counter-app/counter-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,CounterAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CURD';

  constructor(private _dialog:MatDialog, private rout:Router){}

   openAddEditEmmpForm(){
    this._dialog.open(EmpAddEditComponent);
   }


   ShowData(){
    this.rout.navigateByUrl('/Mat-Table'); 
   }
}
