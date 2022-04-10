import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollectionsComponent } from './collections/collections.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { MenuComponent } from './header/menu/menu.component';
import { NewProductsComponent } from './showcase/new-products/new-products.component';
import { DealComponent } from './showcase/deal/deal.component';
import { TopSellingComponent } from './showcase/top-selling/top-selling.component';
import { LinksComponent } from './footer/links/links.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionsComponent,
    ShowcaseComponent,
    SocialComponent,
    FooterComponent,
    TopBarComponent,
    MainHeaderComponent,
    MenuComponent,
    NewProductsComponent,
    DealComponent,
    TopSellingComponent,
    LinksComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
