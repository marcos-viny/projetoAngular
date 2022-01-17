import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FullBannerComponent } from './full-banner/full-banner.component';
import { ListTitlesComponent } from './list-titles/list-titles.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    FooterComponent,
    TitleComponent
  ],
  exports:[
    HeaderComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
