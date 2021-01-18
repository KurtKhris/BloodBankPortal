import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'dashboard', component: MainNavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
