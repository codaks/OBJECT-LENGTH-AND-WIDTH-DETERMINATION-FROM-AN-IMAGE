import { LoaderService } from './app.component.service';
import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private LoaderService:LoaderService){}

  title = 'FRI';
  viewMode = "ExploreData"
  loader = 0;
  posts = []

  changeView(){
    this.viewMode = "ExploreData";
    console.log("View Mode Changed")
  }

  /*activateloader(){
    this.loader = true;
    setTimeout(()=>{
      this.loader = false;
    },2000)
    
  }*/
  check(){
    console.log(this.loader)
    console.log(this.posts)
  }
  ngOnInit() {
    //this.loader = this.LoaderService.getStatus()
    this.loader, this.posts =this.LoaderService.getStatus();
  }
}
