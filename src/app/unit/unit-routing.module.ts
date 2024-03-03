import { Routes, RouterModule } from '@angular/router';
import { UnitListComponent } from './unit-list/unit-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: UnitListComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UnitRoutingModule {}