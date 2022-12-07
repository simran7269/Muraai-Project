import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path:'dashboard',
component:DashboardComponent},

{ path:'card/:id',
component:CardComponent},
{ path:'',
component:LoginPageComponent},

// { path:'',
// component:LoginPageComponent},

{ path:'matcard',canActivate:[AuthGuard],
component:MatCardComponent},
{ path:'wishlist',canActivate:[AuthGuard],
component:WishListComponent},

// { path:'',
// component:SidenavComponent}
// { path:'',
//  component:StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
