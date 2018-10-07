import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CallComponent } from './components/call/call.component';
import { ResultComponent } from './components/result/result.component';
import { ToursComponent } from './components/tours/tours.component';
import { MuseumsComponent } from './components/museums/museums.component';
import { KebabsComponent } from './components/kebabs/kebabs.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'call',
        component: CallComponent,
        data: {
            autostart: false
        }
    },
    {
        path: 'result',
        component: ResultComponent,
        data : {
            search_type: '',
            keyword: '',
        },
    },
    {
        path: 'tours/:keyword',
        component: ToursComponent
    },
    {
        path: 'tours',
        component: ToursComponent
    },
    {
        path: 'museums',
        component: MuseumsComponent
    },
    {
        path: 'museums/:keyword',
        component: MuseumsComponent
    },
    {
        path: 'kebabs',
        component: KebabsComponent
    },
    {
        path: 'kebabs/:keyword',
        component: KebabsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
