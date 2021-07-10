import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopNavComponent } from './myContainer/top-nav/top-nav.component';
import { Text1Component } from './myContainer/text1/text1.component';
import { Text2Component } from './myContainer/text2/text2.component';
import { HeaderComponent } from './myContainer/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    Text1Component,
    Text2Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
