import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {TranslateModule} from "@ngx-translate/core"
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TranslateLoader} from "@ngx-translate/core";
import{HttpModule} from "@angular/http";
import {Http} from "@angular/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import{TranslateStaticLoader} from "ng2-translate"
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({loader:{
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
