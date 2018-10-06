import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CallComponent } from './components/call/call.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'call',
        component: CallComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
