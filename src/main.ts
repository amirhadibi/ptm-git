import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {LicenseManager} from 'ag-grid-enterprise/main';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// for enterprise customers
// LicenseManager.setLicenseKey("your license key");
LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_For_Production_1Devs20_January_2018__MTUxNjQwNjQwMDAwMA==4091ca44a0ac9c86778d044f42c5edc1");

platformBrowserDynamic().bootstrapModule(AppModule);
