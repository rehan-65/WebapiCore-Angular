import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
declare var window:any;
@Component({
  templateUrl: './fileupload.component.html'
})
export class FileuploadComponent implements OnInit{
  formModal:any;



  public pageTitle = 'Welcome to fileupload component';
  fileForm = new UntypedFormGroup({
    altText: new UntypedFormControl(''),
    description: new UntypedFormControl('')
  });
  
  fileToUpload: any;
  constructor(private http:  HttpClient) {
  }
  ngOnInit(): void {
    this.formModal= new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }
OpenModal(){
  this.formModal.show();
}
Dosomething(){
  this.formModal.hide();
}
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  saveFileInfo()
  {
    debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    formData.append('altText', this.fileForm.value.altText);
    formData.append('description', this.fileForm.value.description);
    return this.http.post('http://localhost:48608/FileManager', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"),
   this.formModal.hide()
    );
  }
}
