import { LoaderService } from './../app.component.service';
import { AppComponent } from './../app.component';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exploredata',
  templateUrl: './exploredata.component.html',
  styleUrls: ['./exploredata.component.css']
})
export class ExploredataComponent {

  constructor(public LoaderService : LoaderService, //public AppComponent: AppComponent
    ) { }
  // loader = "1"
  acivateLoader(){;''
    //this.LoaderService.startLoader();
    //this.AppComponent.loader = true
    this.LoaderService.startLoader(1)
    //console.log("Button Clicked")
  }
 
}
