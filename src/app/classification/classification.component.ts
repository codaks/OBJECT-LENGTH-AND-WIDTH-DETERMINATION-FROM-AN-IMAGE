import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})

export class ClassificationComponent implements OnInit {
  selectedFile = null;
  width ;
  height;
  refrenceHeight = 30;
  refrencewidth = 15;
  objHt;
  objWt;
  pxinmheight;
  pxinmwidth;
  cropperOptions:any;
  status = "notUploaded";
  myImage = "assets/abc.jpg";
  data = "";
  prdection = "no";
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  ClassificationFileUploead(event)
  {
    let  elem = event.target;
    console.log(elem);
    if(elem.files.length>0)
    {
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file',elem.files[0]);

      this.http.post('http://localhost/FRI/bbclassifiaction.php',formData,{ responseType: 'text' }).subscribe((data)=>{
        console.log("Got Some Data from backend",data);

      },(error)=>
      {
        console.log("Error",error);
      })
    }
  }


  test(){
    let formData = new FormData();
    this.http.post('http://localhost/FRI/try.php',formData,{ responseType: 'text' }).subscribe((data)=>{
      console.log("Got Some Data from backend",data);
      this.data = data;

    },(error)=>
    {
      console.log("Error",error);
    })
  }

}
