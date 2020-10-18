import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponentComponent } from './wrapper-component/wrapper-component.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [WrapperComponentComponent, HeaderComponent, NavComponent, ContentComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WrapperComponentComponent, HeaderComponent, NavComponent, ContentComponent, FooterComponent
  ]
})
export class WrapperModule { }
