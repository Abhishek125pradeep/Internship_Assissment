import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/constants/home/home.component';
import { ProfileComponent } from './component/constants/profile/profile.component';

const routes: Routes = [
  {path : "", redirectTo : "Home", pathMatch : 'full'},
  {path : "Home", component : HomeComponent},
  {path : "Profile", component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
