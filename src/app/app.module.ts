import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'

import { ToastrService } from './common/toastr.service';


@NgModule({ imports: [
  BrowserModule,
  RouterModule.forRoot(appRoutes)
],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
