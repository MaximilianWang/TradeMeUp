import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { metaReducers, reducers } from './store';
import { SharedModule } from './shared/shared.module';
import { TradePairEffects } from './store/tradepair/tradepair.effects';
import { ProfileEffects } from './store/profile/profile.effects';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import { TradePairModule } from './tradepair/tradepair.module';
import { TradePairsService } from '../../server/services/tradepairsservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    DashboardModule,
    TradePairModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ProfileEffects,
      TradePairEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    )
  ],
  providers: [
    TradePairsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
