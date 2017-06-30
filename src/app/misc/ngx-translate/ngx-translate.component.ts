import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ngx-translate',
  templateUrl: './ngx-translate.component.html',
  styleUrls: ['./ngx-translate.component.css']
})
export class NgxTranslateComponent implements OnInit {

  param = {value: 'world'};

  constructor(private translate: TranslateService) {
       translate.addLangs(["en", "fr"]);
       translate.setDefaultLang('en');

       let browserLang = translate.getBrowserLang();
       translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }

  ngOnInit() {
  }

}
