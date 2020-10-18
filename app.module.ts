import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { WrapperModule } from './wrapper/wrapper.module';




@NgModule({
  declarations: [
    AppComponent,
 
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HelloWorldModule,
    WrapperModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
