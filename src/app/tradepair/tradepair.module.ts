import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradePairAPIService } from './tradepairapi.service';
import { TradepairComponent } from './tradepair.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './tradepair.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TradepairComponent],
  providers: [TradePairAPIService],
  bootstrap: [
    TradepairComponent
  ]
})
export class TradePairModule { }
