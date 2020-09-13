import { LoaderService } from './app.component.service';
import { RouterModule } from '@angular/router';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppRoutingModule,RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalLengthComponent } from './cal-length/cal-length.component';
import { ExploredataComponent } from './exploredata/exploredata.component';
import { ClassificationComponent } from './classification/classification.component';
import { DroneareaComponent } from './dronearea/dronearea.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ForoumComponent } from './foroum/foroum.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingModule,
    FooterComponent,
    NavbarComponent,
    CalLengthComponent,
    ExploredataComponent,
    ClassificationComponent,
    DroneareaComponent,
    AnalysisComponent,
    ForoumComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCropperjsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    StorageServiceModule
  
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
