import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import{availableLanguages,sysOptions} from "./constants"
import{TranslateModule} from "@ngx-translate/core"
import{TranslateStaticLoader} from "ng2-translate"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  languages = availableLanguages;
  selectedLanguage = sysOptions.systemLanguage;
  param = { value: 'world' };
  private translate: TranslateService;
  constructor(public navCtrl: NavController, translate: TranslateService) {
    this.translate=translate;
    this.translate.use('en');
  // console.log(translate.getDefaultLang());
  // translate.use('es');
  // console.log(translate.currentLang);
  }
  // applyLanguage() {
  //   this.translate.use(this.selectedLanguage);
  // }
  change(){
    this.translate.use(this.selectedLanguage);
    sysOptions.systemLanguage = this.selectedLanguage;
    //console.log(this.translate.use('es'));
    //console.log(this.translate);
  }

}
