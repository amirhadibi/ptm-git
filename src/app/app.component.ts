import { Component, OnInit} from '@angular/core';
import { SpinnerService } from './shared/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.scss'],
})
export class AppComponent implements OnInit { 
  showLoader: boolean;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    //Inject loader service inside app.component.ts to show or hide loader
    this.spinnerService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

}


