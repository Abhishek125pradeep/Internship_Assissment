import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/constants/footer/footer.component';
import { HeaderComponent } from './component/constants/header/header.component';
import { HomeComponent } from './component/constants/home/home.component';
import { ProfileComponent } from './component/constants/profile/profile.component';
import { EditDialogueComponent } from './component/constants/edit-dialogue/edit-dialogue.component';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';


import {MatSelectModule} from '@angular/material/select';

import { MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './component/constants/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    EditDialogueComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Duration of toast
      positionClass: 'toast-top-right', // Default position
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
