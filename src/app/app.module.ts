import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule, MatInputModule, MatTooltipModule} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollSectionDirective } from './scroll-section.directive';
import { ScrollManagerDirective } from './scroll-manager.directive';


@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    AboutComponent,
    TimetableComponent,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
