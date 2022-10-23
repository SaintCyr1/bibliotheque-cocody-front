import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/authentication/login/login.component';
import { RegisterComponent } from './views/authentication/register/register.component';
import { BookDetailsComponent } from './views/book/book-details/book-details.component';
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
      },
      {
        path: 'livres/:id',
        component: BookDetailsComponent
      },
      {
        path: 'a-propos',
        component: AboutComponent
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
