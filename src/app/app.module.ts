import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/errors/page-not-found/page-not-found.component';
import { BookComponent } from './views/book/book.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/authentication/login/login.component';
import { RegisterComponent } from './views/authentication/register/register.component';
import { LayoutModule } from './views/layout/layout.module';
import { HomeBannerComponent } from './views/partials/home-banner/home-banner.component';
import { LatestBookComponent } from './views/partials/latest-book/latest-book.component';
import { SearchBlockComponent } from './views/partials/search-block/search-block.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BookComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HomeBannerComponent,
    LatestBookComponent,
    SearchBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      faMagnifyingGlass
    );
  }
}
