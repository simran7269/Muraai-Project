import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import{MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';


import {  ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatInputModule}from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';



import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CardComponent } from './card/card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DetailsComponent } from './details/details.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatSelectModule} from '@angular/material/select';
import { AuthGuard } from './auth.guard';
import { SampleserviceService } from './sampleservice.service';
import { MatCardComponent } from './mat-card/mat-card.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HiglightDirective } from './higlight.directive';
import { ButtonDirDirective } from './button-dir.directive';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    OrderDetailsComponent,
    CardComponent,
    LoginPageComponent,
    SidenavComponent,
    DetailsComponent,
    StepperComponent,
    MatCardComponent,
    WishListComponent,
    HiglightDirective,
    ButtonDirDirective,
   
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatPaginatorModule,
    MatRadioModule,
    MatExpansionModule,
    
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
