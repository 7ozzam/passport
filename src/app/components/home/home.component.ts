import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DataManagementService } from '../../services/data-management.service';

declare var smartcrop: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  uploadForm: FormGroup;
  formData = new FormData();
  reader = new FileReader();
  // file = new HTMLCanvasElement();
  croppedImage: any;
  imgURL: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: RestApiService,

    public dataManagementService: DataManagementService,
    ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      image: ['']
    });
  }

  async onSubmit() {
    this.croppedImage = await this.dataManagementService.removeBackground(this.formData);
  }

  resetData() {
    this.formData.delete('image_file');
    this.imgURL = '';
    this.croppedImage = null;
    this.uploadForm.get('image').setValue('');
  }

  onFileSelect(event) {
    this.resetData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formData.append("image_file", file);
      this.reader.readAsDataURL(file);
      this.reader.onload = (_event) => {
      this.imgURL = this.reader.result;
    }
    }
  }
}
