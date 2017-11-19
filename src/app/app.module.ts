import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TripMockService } from './services/mocks/trip.mock.service';

import { TripFindComponent } from './components/trip-find/trip-find.component';
import { TripFindFormComponent } from './components/trip-find-form/trip-find-from.component';
import { TripViewerComponent } from './components/trip-viewer/trip-viewer.component';
import { TripService } from './services/trip.service';
import { TripFindRoutesModule } from './routes/trip-find-routes.module';

@NgModule({
	declarations: [
		TripFindComponent,
		TripFindFormComponent,
		TripViewerComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		TripFindRoutesModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			TripMockService, { dataEncapsulation: false }
		)
	],
	providers: [TripService],
	bootstrap: [TripFindComponent]
})
export class AppModule { }
