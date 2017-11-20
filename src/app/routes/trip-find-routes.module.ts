import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripFindFormComponent } from '../components/trip-find-form/trip-find-from.component';
import { TripViewerComponent } from '../components/trip-viewer/trip-viewer.component';
import { Trip } from '../models/trip';

const routes: Routes = [
    { path: '', component: TripFindFormComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class TripFindRoutesModule {}
