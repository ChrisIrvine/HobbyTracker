import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'unit',
        pathMatch: 'full'
    },
    {
        path: 'unit',
        loadChildren: () => import('./unit/unit.module').then(m => m.UnitModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }