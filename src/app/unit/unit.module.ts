import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitRoutingModule } from './unit-routing.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, UnitRoutingModule, UnitListComponent]
})
export class UnitModule { }
