import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';


@Component({
  selector: 'app-cal-length',
  templateUrl: './cal-length.component.html',
  styleUrls: ['./cal-length.component.css']
})


export class CalLengthComponent {
  @ViewChild('angularCropper', { static: false }) public angularCropper: CropperComponent;
  
  selectedFile = null;
  width;
  height;
  refrenceHeight = 30;
  refrencewidth = 15;
  objHt;
  objWt;
  pxinmheight;
  pxinmwidth;
  rotateangle;
  Rangle;
  cropperOptions: any;
  status = "notUploaded";
  myImage = "assets/abc.jpg";
  viewmode = 'doity';
  
  changeMode(){
    this.angularCropper.cropper.setDragMode('move')
  }





  getReference(refWidth, refHeight) {
    this.width = this.angularCropper.cropper.getData().width;
    this.height = this.angularCropper.cropper.getData().height;
    this.refrencewidth = refWidth;
    this.refrenceHeight = refHeight;
    this.pxinmheight = Number(this.refrenceHeight) / Number(this.height);
    this.pxinmwidth = Number(this.refrencewidth) / Number(this.width);
    //console.log(this.width, " ",this.height);
  }

  UpdateValue(event) {
    this.width = this.angularCropper.cropper.getData().width;
    this.height = this.angularCropper.cropper.getData().height;
    this.objHt = this.pxinmheight * Number(this.height);
    this.objWt = this.pxinmheight * Number(this.width);
    console.log("The Height of Object is ", this.objHt, "cm and the width of object is ", this.objWt, "cm");
  }
  getObject() {

    this.width = this.angularCropper.cropper.getData().width;
    this.height = this.angularCropper.cropper.getData().height;
    this.objHt = this.pxinmheight * Number(this.height);
    this.objWt = this.pxinmheight * Number(this.width);
    console.log("The Height of Object is ", this.objHt, "cm and the width of object is ", this.objWt, "cm");
  }
  constructor(private http: HttpClient) {

  }

  FileUploead(event) {
    let elem = event.target;
    console.log(elem);
    if (elem.files.length > 0) {
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.http.post('http://localhost/FRI/index.php', formData, { responseType: 'text' }).subscribe((data) => {
        console.log("Got Some Data from backend", data);
        this.status = "uploaded";
        this.myImage = "assets/abc.jpg"

      }, (error) => {
        console.log("Error", error);
      })
    }
  }
  getRotate(Rangle) {

    this.Rangle = Rangle;
    this.angularCropper.cropper.rotateTo(this.Rangle);
    console.log("This is Clicked at Angle of " + this.Rangle);
  }

  getReset() {

    this.angularCropper.cropper.reset();
  }
  

  ngOnInit() {
    }
}
