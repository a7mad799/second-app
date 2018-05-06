import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    ParagraphComponent,
    GalleryComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
