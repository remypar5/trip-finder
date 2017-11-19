import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripFindFormComponent } from '../components/trip-find-form/trip-find-from.component';

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
