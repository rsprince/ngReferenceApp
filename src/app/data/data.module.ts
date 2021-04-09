import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { DataRoutingModule } from './data-routing.module';
import { AngularMaterialsModule } from '../shared/angular-materials.module';



@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    AngularMaterialsModule
  ]
})
export class DataModule { }
