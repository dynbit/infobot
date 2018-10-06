import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CallComponent } from './components/call/call.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'call',
        component: CallComponent
    },
    {
        path: 'result',
        component: ResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
