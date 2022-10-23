import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/authentication/login/login.component';
import { RegisterComponent } from './views/authentication/register/register.component';
import { BookComponent } from './views/book/book.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { HomeComponent } from './views/home/home.component';
import { BaseComponent } from './views/layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'connexion',
        component: LoginComponent
      },
      {
        path: 'inscription',
        component: RegisterComponent
      },
      {
        path: 'livres',
        component: BookComponent
      }
    ]
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
