import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileStatsService } from './core/services/profile-stats.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// Material

// Components 
import { CsgoStatsViewComponent } from './csgo-stats-view/csgo-stats-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CsgoStatsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfileStatsService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
